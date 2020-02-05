import Sort from '../Sort';

export default class InsertionSort extends Sort {
  sort(originalArray) {
    const array = [...originalArray];

    // 遍历所有数组元素
    for (let i = 0; i < array.length; i += 1) {
      let currentIndex = i;

      // 调用访问回调
      this.callbacks.visitingCallback(array[i]);

      // 去检查数组先前的元素是否大于当前元素
      // 如果是的话，则交换元素
      while (
        array[currentIndex - 1] !== undefined
        && this.comparator.lessThan(array[currentIndex], array[currentIndex - 1])
      ) {
        // 调用访问回调
        this.callbacks.visitingCallback(array[currentIndex - 1]);

        // 交换元素
        const tmp = array[currentIndex - 1];
        array[currentIndex - 1] = array[currentIndex];
        array[currentIndex] = tmp;

        // 把当前位置左移一位
        currentIndex -= 1;
      }
    }

    return array;
  }
}
