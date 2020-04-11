## 迭代器模式（Iterator Pattern）

迭代器模式的定义：提供一种方法顺序访问一个聚合对象之后的各个元素，而又不需要暴露该对象的内部表示。

迭代器模式可以把迭代的过程从业务之后分离出来，在使用迭代器模式之后，即使不关系对象的内部构造，也可以按顺序访问其中的每个元素。

但...JavaScript中已经内置了迭代器，如forEach Iterator等。

迭代器实现：

```JavaScript
const each = function (ary, callback) {
  for (var i = 0; i < ary.length; i++) {
    callback(i, ary[i])
  }
}
each([1, 2, 3, 4, 5], function (i, item) {
  console.log(i, item)
})
```
