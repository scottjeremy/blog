# 堆(heap)

在计算机科学中, 一个 *** 堆(heap) *** 是一种特殊的基于树的数据结构, 它满足下面描述的堆属性.

在一个 *** 最小堆(min heap) *** 中, 如果 ```P``` 是 ```C``` 的一个父级节点, 那么 ```P``` 的key(或value)应小于或等于 ```C```的对应值

![最小堆](./images/1.png "最小堆")

在一个 *** 最大堆(max heap) *** 中, ```P``` 的key(或value)大于 ```C``` 的对应值

![最大堆](./images/1.png "最大堆")

在堆“顶部”的没有父级节点的节点, 被称之为根节点.

## 堆的实现

- [堆(heap)的具体实现](Heap.js)

- [最大堆(max heap)的具体实现](MaxHeap.js)

- [最小堆(min heap)的具体实现](MinHeap.js)

## 堆的应用

- 海量实数中(一亿级别以上)找到TopK(一万级别以下)的数集合.
- Dijkstra’s algorithm（单源最短路问题中需要在邻接表中找到某一点的最短邻接边，这可以将复杂度降低）
- Huffman coding（贪心算法的一个典型例子，采用优先队列构建最优的前缀编码树(prefixEncodeTree)）
- Prim’s algorithm for minimum spanning tree
- Best-first search algorithms
