# 栈(Stack)

Stack的特点是后进先出(LIFO = last in, first out).生活中常见的Stack的例子比如一摞书,你最后放上去的那本你之后会最先拿收; 又比如浏览器的访问历史, 当点击返回按钮, 最后访问的网站最先从历史记录中弹出.

![Stack](./images/1.png "Stack")

Stack一般具有以下方法:

1. push: 将一个元素推入栈顶
2. pop: 移除栈顶元素, 并返回被移除的元素
3. peek: 返回栈顶元素
4. isEmpty: 判断是否为空

## 其实栈就是单链表的另一种实现方法

```JavaScript
import LinkedList from '../linked-list/LinkedList';

class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    // 如果这个单链表没有表头, 那么代表这个栈为空
    return !this.linkedList.head;
  }

  /**
   * @return {*}
   */
  peek() {
    if (this.isEmpty()) {
      // 如果为空 则返回null
      return null;
    }

    // 读栈顶的元素
    return this.linkedList.head.value;
  }

  /**
   * @param {*} value
   */
  push(value) {
    // push意味着将值放在堆栈顶部。因此，我们只需要添加到链表开始的位置即可。
    this.linkedList.prepend(value);
  }

  /**
   * @return {*}
   */
  pop() {
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }
}
```

## 内存存储的方式就是单链表的内存存储方式

## 参考资料

[javascript-algorithms](https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/stack/Stack.js)
