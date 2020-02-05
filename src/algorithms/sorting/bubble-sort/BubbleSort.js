import Sort from '../Sort';

export default class BubbleSort extends Sort {
  sort(originalArray) {
    // 当数组已经是排好序或者排了一个已经是顺序的时候，冒泡排序会继续执行
    // 所以就会产生不必要的空间和时间的浪费，所以就有了下面的swapped，相当于一个记号
    // 保留有关是否发生交换的信息的标志。
    let swapped = false;
    // 克隆原始数组，避免对原始数组进行操作
    const array = [...originalArray];

    for (let i = 1; i < array.length; i += 1) {
      swapped = false;

      // 调用访问回调
      this.callbacks.visitingCallback(array[i]);

      for (let j = 0; j < array.length - i; j += 1) {
        // 调用访问回调
        this.callbacks.visitingCallback(array[j]);

        // 如果顺序错误则交换元素。
        if (this.comparator.lessThan(array[j + 1], array[j])) {
          // 这都可以直接赋值，涨见识了。。。
          [array[j], array[j + 1]] = [array[j + 1], array[j]];

          // 该次循环有交换元素
          swapped = true;
        }
      }

      // 如果swapped为false，代表着整个数组在排序中全程无交换，则直接跳出循环
      if (!swapped) {
        return array;
      }
    }

    return array;
  }
}
