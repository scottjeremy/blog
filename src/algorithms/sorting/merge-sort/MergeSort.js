import Sort from '../Sort';

export default class MergeSort extends Sort {
  sort(originalArray) {
    // 调用访问回调
    this.callbacks.visitingCallback(null);

    // 判断数组长度是否大于一 （这里也比较重要）
    if (originalArray.length <= 1) {
      return originalArray;
    }

    // 把数组分成两等分
    const middleIndex = Math.floor(originalArray.length / 2);
    const leftArray = originalArray.slice(0, middleIndex);
    const rightArray = originalArray.slice(middleIndex, originalArray.length);

    // 把两等分数组进行递归排序
    // 这是归并排序的最重要部分
    // 递归把数组按中间分割，实现分而治之，递归直到左右数组的长度都为1，然后合并数组的时候
    // 分别比较左右数组的第一位
    const leftSortedArray = this.sort(leftArray);
    const rightSortedArray = this.sort(rightArray);

    // 把两等分数组进行合并
    return this.mergeSortedArrays(leftSortedArray, rightSortedArray);
  }

  mergeSortedArrays(leftArray, rightArray) {
    let sortedArray = [];

    // 如果左右数组都不为空
    while (leftArray.length && rightArray.length) {
      let minimumElement = null;

      // 查找两个数组的最小值,找到最小元素后把这个最小元素从原数组中删除
      if (this.comparator.lessThanOrEqual(leftArray[0], rightArray[0])) {
        minimumElement = leftArray.shift();
      } else {
        minimumElement = rightArray.shift();
      }

      // 调用访问回调
      this.callbacks.visitingCallback(minimumElement);

      // 将两个数组的最小元素push到已排序的数组
      sortedArray.push(minimumElement);
    }

    // 如果两个数组之一仍具有元素，则由于该元素已被排序，因此我们只需将该元素连接到已排序的数组即可。
    if (leftArray.length) {
      sortedArray = sortedArray.concat(leftArray);
    }

    if (rightArray.length) {
      sortedArray = sortedArray.concat(rightArray);
    }

    return sortedArray;
  }
}
