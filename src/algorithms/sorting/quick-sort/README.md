# 快速排序（Quick Sort）

Quicksort是一种分而治之的算法。 Quicksort首先将大型数组分为两个较小的子数组：低元素和高元素。然后，Quicksort可以对子数组进行递归排序。不过对于长度小于100的数组来说，还是插入排序会更快一些。

快速排序的步骤如下:

1. 从数组中选择一个称为枢轴(pivot)的元素。
2. 分区：对数组重新排序，以使所有值小于枢轴的元素都位于枢轴之前，而所有值大于枢轴的元素都位于枢轴之后（相等的值可以任意选择）。分割之后，枢轴处于其最终位置。这称为分区操作。
3. 将上述步骤递归地应用于具有较小值的元素的子数组，并分别应用于具有较大值的元素的子数组。

快速排序算法的动画可视化。水平线是枢轴（pivot）值。快速排序算法的快慢与取的枢轴(pivot)值有关。

![Quicksort](https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif)

## 复杂度

| 排序名称           | 最佳             | 平均             | 最差                | 内存       | 稳定性     | 备注  |
| ----------------- | :-------------: | :-------------: | :-----------------: | :-------: | :-------: | :-------- |
| **快速排序**       | n&nbsp;log(n)   | n&nbsp;log(n)    | n<sup>2</sup>       | log(n)    | No        |  快速排序通常使用O（log（n））堆栈空间就能完成 |

## 参考资料

- [javascript-algorithms](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sorting/quick-sort/README.md)
- [Wikipedia](https://en.wikipedia.org/wiki/Quicksort)
- [YouTube](https://www.youtube.com/watch?v=SLauY6PpjW4&index=28&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
