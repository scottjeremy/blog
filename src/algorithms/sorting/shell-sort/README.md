# 希尔排序（Shell Sort）

希尔排序就是选定一个希尔增量序列（也叫间隙序列）然后按照这个序列进行插入排序，简单的来说就是在插入排序上面再套一层希尔增量循环。

这个希尔增量数列最好按照质数来排序，最后一次的循环的希尔增量（间隙）肯定是为1

![Shellsort](https://upload.wikimedia.org/wikipedia/commons/d/d8/Sorting_shellsort_anim.gif)

## 复杂度

| 排序名称            | 最佳            | 平均           | 最差                         | 内存       | 稳定性     | 备注       |
| ------------------ | :------------: | :-----------: | :--------------------------: | :-------: | :-------: | :-------- |
| **希尔排序**        | n&nbsp;log(n)  | 取决于间隙序列   | n&nbsp;(log(n))<sup>2</sup>  | 1         | 不稳定     |           |

## References

- [javascript-algorithms](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/shell-sort)
- [Tutorials Point](https://www.tutorialspoint.com/data_structures_algorithms/shell_sort_algorithm.htm)
- [Wikipedia](https://en.wikipedia.org/wiki/Shellsort)
- [YouTube by Rob Edwards](https://www.youtube.com/watch?v=ddeLSDsYVp8&index=79&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
