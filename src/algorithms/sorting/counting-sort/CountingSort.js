import Sort from '../Sort';

export default class CountingSort extends Sort {
  /**
   * @param {number[]} originalArray
   * @param {number} [smallestElement]
   * @param {number} [biggestElement]
   */
  sort(originalArray, smallestElement = undefined, biggestElement = undefined) {
    // 初始化数组中的最大和最小元素，以便以后构建数字存储桶数组。
    let detectedSmallestElement = smallestElement || 0;
    let detectedBiggestElement = biggestElement || 0;

    if (smallestElement === undefined || biggestElement === undefined) {
      // 这次循环的目的是找处数组中最大的值和最小的值 该次循环的时间复杂度为 n
      originalArray.forEach((element) => {
        // 调用访问回调
        this.callbacks.visitingCallback(element);

        // 找出最大的元素
        if (this.comparator.greaterThan(element, detectedBiggestElement)) {
          detectedBiggestElement = element;
        }

        // 找出最小的元素
        if (this.comparator.lessThan(element, detectedSmallestElement)) {
          detectedSmallestElement = element;
        }
      });
    }

    // 初始化桶数组
    // 该数组将会保存originalArray中每个元素的频率
    const buckets = Array(detectedBiggestElement - detectedSmallestElement + 1).fill(0);

    originalArray.forEach((element) => {
      // 调用访问回调
      this.callbacks.visitingCallback(element);

      buckets[element - detectedSmallestElement] += 1;
    });

    // 将当前频率数组与上一个频率相加
    for (let bucketIndex = 1; bucketIndex < buckets.length; bucketIndex += 1) {
      buckets[bucketIndex] += buckets[bucketIndex - 1];
    }

    // 现在，让频率数组向右移动，以得出排序后的index值
    buckets.pop();
    buckets.unshift(0);

    // 初始化排序后的数组，开始排序
    const sortedArray = Array(originalArray.length).fill(null);
    for (let elementIndex = 0; elementIndex < originalArray.length; elementIndex += 1) {
      // 获取要放入正确排序位置的元素。
      const element = originalArray[elementIndex];

      // 调用访问回调
      this.callbacks.visitingCallback(element);

      // 获取此元素在已排序数组中的正确位置。
      const elementSortedPosition = buckets[element - detectedSmallestElement];

      // 将元素放在已排序数组中的正确位置。
      sortedArray[elementSortedPosition] = element;

      // 增加当前元素在存储桶中的位置，以备循环正确放置。
      buckets[element - detectedSmallestElement] += 1;
    }

    return sortedArray;
  }
}
