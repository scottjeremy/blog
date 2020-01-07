# 二叉搜索树(Binary Search Tree)

在计算机科学中,  **二叉搜索树(BST)** , 有时候会被称为有序或已排序的二叉树, 它是一种特定类型的容器: 在内存中存储"项"(例如, 数字, 名称等)的数据结构.它们允许快速查找, 添加和删除指定项, 并且可以用于实现动态项的集,或者允许通过其键值查找指定项(例如, 通过姓名查找某人的电话号码).

二叉搜索树会将其键值保持在具有规律的顺序中，以便查找和其他操作可以使用二分查找的原理：当我们需要在树中寻找键值时（或在其中插入新键值的位置），它们从根到叶子遍历该树。与存储在树节点中的键值进行比较，并根据该比较决定继续在左侧或右侧子树中搜索。平均而言，这意味着每次比较都允许操作跳过树的大约一半，因此每次查找，插入或删除所花费的时间与树中存储的项数成正比。这比在（未排序的）数组中按键值查找项目所需的线性时间要好得多，但比对哈希表进行相应的操作要慢。

这里有一棵大小为9，深度为3，根为8的二叉搜索树。叶子没有画。

![Binary Search Tree](https://upload.wikimedia.org/wikipedia/commons/d/da/Binary_search_tree.svg)

## 基础操作的伪代码

### 插入

```text
insert(value)
  Pre: value has passed custom type checks for type T
  Post: value has been placed in the correct location in the tree
  if root = ø
    root ← node(value)
  else
    insertNode(root, value)
  end if
end insert
```

```text
insertNode(current, value)
  Pre: current is the node to start from
  Post: value has been placed in the correct location in the tree
  if value < current.value
    if current.left = ø
      current.left ← node(value)
    else
      InsertNode(current.left, value)
    end if
  else
    if current.right = ø
      current.right ← node(value)
    else
      InsertNode(current.right, value)
    end if
  end if
end insertNode
```

### 搜索

```text
contains(root, value)
  Pre: root is the root node of the tree, value is what we would like to locate
  Post: value is either located or not
  if root = ø
    return false
  end if
  if root.value = value
    return true
  else if value < root.value
    return contains(root.left, value)
  else
    return contains(root.right, value)
  end if
end contains
```

### 删除

```text
remove(value)
  Pre: value is the value of the node to remove, root is the node of the BST
      count is the number of items in the BST
  Post: node with value is removed if found in which case yields true, otherwise false
  nodeToRemove ← findNode(value)
  if nodeToRemove = ø
    return false
  end if
  parent ← findParent(value)
  if count = 1
    root ← ø
  else if nodeToRemove.left = ø and nodeToRemove.right = ø
    if nodeToRemove.value < parent.value
      parent.left ←  nodeToRemove.right
    else
      parent.right ← nodeToRemove.right
    end if
  else if nodeToRemove.left != ø and nodeToRemove.right != ø
    next ← nodeToRemove.right
    while next.left != ø
      next ← next.left
    end while
    if next != nodeToRemove.right
      remove(next.value)
      nodeToRemove.value ← next.value
    else
      nodeToRemove.value ← next.value
      nodeToRemove.right ← nodeToRemove.right.right
    end if
  else
    if nodeToRemove.left = ø
      next ← nodeToRemove.right
    else
      next ← nodeToRemove.left
    end if
    if root = nodeToRemove
      root = next
    else if parent.left = nodeToRemove
      parent.left = next
    else if parent.right = nodeToRemove
      parent.right = next
    end if
  end if
  count ← count - 1
  return true
end remove
```

### 查找父级的节点

```text
findParent(value, root)
  Pre: value is the value of the node we want to find the parent of
       root is the root node of the BST and is != ø
  Post: a reference to the prent node of value if found; otherwise ø
  if value = root.value
    return ø
  end if
  if value < root.value
    if root.left = ø
      return ø
    else if root.left.value = value
      return root
    else
      return findParent(value, root.left)
    end if
  else
    if root.right = ø
      return ø
    else if root.right.value = value
      return root
    else
      return findParent(value, root.right)
    end if
  end if
end findParent
```

### 查找节点

```text
findNode(root, value)
  Pre: value is the value of the node we want to find the parent of
       root is the root node of the BST
  Post: a reference to the node of value if found; otherwise ø
  if root = ø
    return ø
  end if
  if root.value = value
    return root
  else if value < root.value
    return findNode(root.left, value)
  else
    return findNode(root.right, value)
  end if
end findNode
```

### 查找最小值

```text
findMin(root)
  Pre: root is the root node of the BST
    root = ø
  Post: the smallest value in the BST is located
  if root.left = ø
    return root.value
  end if
  findMin(root.left)
end findMin
```

### 查找最大值

```text
findMax(root)
  Pre: root is the root node of the BST
    root = ø
  Post: the largest value in the BST is located
  if root.right = ø
    return root.value
  end if
  findMax(root.right)
end findMax
```

### 遍历

#### 中序遍历

```text
inorder(root)
  Pre: root is the root node of the BST
  Post: the nodes in the BST have been visited in inorder
  if root = ø
    inorder(root.left)
    yield root.value
    inorder(root.right)
  end if
end inorder
```

#### 先序遍历

```text
preorder(root)
  Pre: root is the root node of the BST
  Post: the nodes in the BST have been visited in preorder
  if root = ø
    yield root.value
    preorder(root.left)
    preorder(root.right)
  end if
end preorder
```

#### 后序遍历

```text
postorder(root)
  Pre: root is the root node of the BST
  Post: the nodes in the BST have been visited in postorder
  if root = ø
    postorder(root.left)
    postorder(root.right)
    yield root.value
  end if
end postorder
```

## 复杂度

### 时间复杂度

| Access    | Search    | Insertion | Deletion  |
| :-------: | :-------: | :-------: | :-------: |
| O(log(n)) | O(log(n)) | O(log(n)) | O(log(n)) |

### 空间复杂度

O(n)

## 二叉搜索树的使用场景

二叉查找树由于其构造的特性，使得其特别适合于需要动态查询而且数据量大的数据结构。

由于二叉查找树中序遍历即为有序序列，也使得其适合需要经常排序的数据结构。

## 参考

- [Wikipedia](https://en.wikipedia.org/wiki/Binary_search_tree)
- [Inserting to BST on YouTube](https://www.youtube.com/watch?v=wcIRPqTR3Kc&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=9&t=0s)
- [BST Interactive Visualisations](https://www.cs.usfca.edu/~galles/visualization/BST.html)
