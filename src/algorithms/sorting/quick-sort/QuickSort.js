import Sort from '../Sort';

export default class QuickSort extends Sort {
  /**
   * @param {*[]} originalArray
   * @return {*[]}
   */
  sort(originalArray) {
    // 克隆数组
    const array = [...originalArray];

    // 如果数组的元素少于或等于一个，则它已经排序。
    if (array.length <= 1) {
      return array;
    }

    // 初始化左右数组
    const leftArray = [];
    const rightArray = [];

    // 拿第一个元素作为pivot
    const pivotElement = array.shift();
    const centerArray = [pivotElement];

    // 在左，中和右数组之间拆分所有数组元素。
    while (array.length) {
      const currentElement = array.shift();

      // 调用访问回调
      this.callbacks.visitingCallback(currentElement);

      if (this.comparator.equal(currentElement, pivotElement)) {
        centerArray.push(currentElement);
      } else if (this.comparator.lessThan(currentElement, pivotElement)) {
        leftArray.push(currentElement);
      } else {
        rightArray.push(currentElement);
      }
    }

    // 把左边和右边的数组给排序
    const leftArraySorted = this.sort(leftArray);
    const rightArraySorted = this.sort(rightArray);

    // 我们将排序后的左数组与中心数组和排序后的右数组连接起来。
    return leftArraySorted.concat(centerArray, rightArraySorted);
  }
}
