# 计数排序（Counting Sort）

当每个数组元素的数字范围很小时，计数排序最有效。

## 计算步骤

1. 循环数组找出最大和最小的元素，或者指定出数组的最大或者最小的元素
2. 循环数组得出数组元素出现的次数，存入数组 C
3. 对所有的计数累加（从 C 中的第一个元素开始，每一项和前一项相加），得到的数组把数组往右移动一步（即：把最后的元素去掉，第一个元素置0）
4. 反向填充目标数组： 每一次添加已排序的数组则增加当前元素在存储桶中的位置

## 复杂度

| 排序名字               | 最佳                | 平均                 | 最差                | 内存       | 稳定       | 备注      |
| --------------------- | :----------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Counting sort**     | n + r（桶的数组长度） | n + r               | n + r               | n + r     | Yes       |          |

## 参考资料

- [javascript-algorithms](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sorting/counting-sort/README.md)
- [Wikipedia](https://en.wikipedia.org/wiki/Counting_sort)
- [YouTube](https://www.youtube.com/watch?v=OKd534EWcdk&index=61&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [EfficientAlgorithms](https://efficientalgorithms.blogspot.com/2016/09/lenear-sorting-counting-sort.html)
