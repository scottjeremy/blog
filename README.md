# blog

[![Build Status](https://travis-ci.org/scottjeremy/blog.svg?branch=master)](https://travis-ci.org/scottjeremy/blog)
[![codecov](https://codecov.io/gh/scottjeremy/blog/branch/master/graph/badge.svg)](https://codecov.io/gh/scottjeremy/blog)

记录我想记录的博客

## JavaScript数据结构

- [Linked List](src/data-structures/linked-list) 链表
  - [x] [链表实现](src/data-structures/linked-list/LinkedList.js)
- [Doubly Linked List](src/data-structures/linked-list#双向链表) 双向链表
  - [x] [双向链表实现](src/data-structures/doubly-linked-list/DoublyLinkedList.js)
- [Queue](src/data-structures/queue) 队列
  - [x] [队列实现](src/data-structures/queue/Queue.js)
- [Heap](src/data-structures/heap) 堆 - 最大堆和最小堆
  - [x] [堆实现](src/data-structures/heap/Heap.js)
  - [x] [最大堆实现](src/data-structures/heap/MaxHeap.js)
  - [x] [最小堆实现](src/data-structures/heap/MinHeap.js)
- [Hash Table](src/data-structures/hash-table) 哈希表
  - [x] [哈希表实现](src/data-structures/hash-table/HashTable.js)
- [stack](src/data-structures/stack) 栈
  - [x] [栈实现](src/data-structures/stack/Stack.js)
- [Tree](src/data-structures/tree) 树
  - [Binary Search Tree](src/data-structures/tree/binary-search-tree) 二叉搜索树
    - [x] [二叉搜索树实现](src/data-structures/tree/binary-search-tree/BinarySearchTree.js)
  - [AVL Tree](src/data-structures/tree/avl-tree) AVL树
    - [x] [AVL树实现](src/data-structures/tree/avl-tree/AvlTree.js)
  - [Red-Black Tree](src/data-structures/tree/avl-tree) 红黑树
    - [ ] [红黑树实现](src/data-structures/tree/binary-search-tree)
  - [Segment Tree](src/data-structures/tree/avl-tree) 线段树
    - [ ] [线段树实现](src/data-structures/tree/binary-search-tree)
  - [Fenwick Tree](src/data-structures/tree/avl-tree) 树状数组
    - [ ] [树状数组实现](src/data-structures/tree/binary-search-tree)
- [Graph](src/data-structures/graph) 图 (有向图与无向图)
- [Disjoint Set](src/data-structures/tree) 并查集
- [Bloom Filter](src/data-structures/tree) 布隆过滤器

### 数据结构操作的复杂性

| 数据结构       |  连接  |  查找  |  插入  |  删除  | 备注                                 |
| -------------- | :----: | :----: | :----: | :----: | ------------------------------------ |
| **数组**       |   1    |   n    |   n    |   n    |                                      |
| **栈**         |   n    |   n    |   1    |   1    |                                      |
| **队列**       |   n    |   n    |   1    |   1    |                                      |
| **链表**       |   n    |   n    |   1    |   1    |                                      |
| **哈希表**     |   -    |   n    |   n    |   n    | 在完全哈希函数情况下，复杂度是 O(1） |
| **二分查找树** |   n    |   n    |   n    |   n    | 在平衡树情况下，复杂度是 O(log(n))   |
| **B 树**       | log(n) | log(n) | log(n) | log(n) |                                      |
| **红黑树**     | log(n) | log(n) | log(n) | log(n) |                                      |
| **AVL 树**     | log(n) | log(n) | log(n) | log(n) |                                      |
| **布隆过滤器** |   -    |   1    |   1    |   -    | 存在一定概率的判断错误（误判成存在） |

## JavaScript算法

- 排序 (Sort)
  - [x] 冒泡排序 - [Bubble Sort](src/algorithms/sorting/bubble-sort)
  - [x] 选择排序 - [Selection Sort](src/algorithms/sorting/selection-sort)
  - [x] 插入排序 - [Insertion Sort](src/algorithms/sorting/insertion-sort)
  - [x] 堆排序 - [Heap Sort](src/algorithms/sorting/heap-sort)
  - [x] 归并排序 - [Merge Sort](src/algorithms/sorting/merge-sort)
  - [x] 快速排序 - [Quick Sort](src/algorithms/sorting/quick-sort)
  - [x] 希尔排序 - [Shell Sort](src/algorithms/sorting/shell-sort)
  - [x] 计数排序 - [Counting Sort](src/algorithms/sorting/counting-sort)
  - [x] 基数排序

### 数组排序算法的复杂性

| 名称         |   最优   |      平均      |     最坏     |  内存  | 稳定  | 备注                                                       |
| ------------ | :------: | :------------: | :----------: | :----: | :---: | ---------------------------------------------------------- |
| **冒泡排序** |    n     |      n^2       |     n^2      |   1    |  Yes  |                                                            |
| **插入排序** |    n     |      n^2       |     n^2      |   1    |  Yes  | 如果序列基本有序，则插入排序简单且有效，比冒泡排序效率要高 |
| **选择排序** |   n^2    |      n^2       |     n^2      |   1    |  No   |                                                            |
| **堆排序**   | n log(n) |    n log(n)    |   n log(n)   |   1    |  No   |                                                            |
| **归并排序** | n log(n) |    n log(n)    |   n log(n)   |   n    |  Yes  |                                                            |
| **快速排序** | n log(n) |    n log(n)    |     n^2      | log(n) |  No   | 在 in-place 版本下，内存复杂度通常是 O(log(n))             |
| **希尔排序** | n log(n) | 取决于差距序列 | n (log(n))^2 |   1    |  No   |                                                            |
| **计数排序** |  n + r   |     n + r      |    n + r     | n + r  |  Yes  | r - 数组里最大的数                                         |
| **基数排序** |  n * k   |     n * k      |    n * k     | n + k  |  Yes  | k - 最长 key 的升序                                        |

## TODO：JavaScript设计模式

- [x] 单例模式 - [Singleton Pattern](src/design-pattern/SingletonPattern)
- [x] 策略模式 - [Strategy Pattern](src/design-pattern/StrategyPattern)
- [x] 代理模式 - [Proxy Pattern](src/design-pattern/ProxyPattern/README.md)
- [x] 迭代器模式 - [Iterator Pattern](src/design-pattern/IteratorPattern/README.md)
- [ ] 发布-订阅模式
- [ ] 命令模式
- [ ] 组合模式
- [ ] 模板模式
- [ ] 享元模式
- [ ] 责任链模式
- [ ] 中介者模式
- [ ] 装饰者模式
- [ ] 状态模式
- [ ] 适配器模式

## Vue

[Webpack打包Vue异步组件原理](src/vue/分析Webpack打包Vue异步组件.md)

## Parse

[LiveQuery实现原理](src/parse/LiveQuery实现原理.md)
