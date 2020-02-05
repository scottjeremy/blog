import Sort from '../Sort';

export default class ShellSort extends Sort {
  sort(originalArray) {
    // 克隆数组
    const array = [...originalArray];

    // 定义间隙距离 又名希尔增量排序
    let gap = Math.floor(array.length / 2);

    // 排序数组大于1的时候执行循环
    while (gap > 0) {
      // 比较相对遥远的元素
      for (let i = 0; i < (array.length - gap); i += 1) {
        let currentIndex = i;
        let gapShiftedIndex = i + gap;

        while (currentIndex >= 0) {
          // 调用访问回调
          this.callbacks.visitingCallback(array[currentIndex]);

          // 检查数组先前的元素是否大于当前元素
          // 如果是的话，则交换元素
          if (this.comparator.lessThan(array[gapShiftedIndex], array[currentIndex])) {
            const tmp = array[currentIndex];
            array[currentIndex] = array[gapShiftedIndex];
            array[gapShiftedIndex] = tmp;
          }

          gapShiftedIndex = currentIndex;
          currentIndex -= gap;
        }
      }

      // 缩小间距
      gap = Math.floor(gap / 2);
    }

    return array;
  }
}
