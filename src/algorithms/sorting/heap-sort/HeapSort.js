import Sort from '../Sort';
import MinHeap from '../../../data-structures/heap/MinHeap';

export default class HeapSort extends Sort {
  sort(originalArray) {
    const sortedArray = [];
    const minHeap = new MinHeap(this.callbacks.compareCallback);

    // 把数组中的元素插入到最小堆里
    originalArray.forEach((element) => {
      // 调用访问回调
      this.callbacks.visitingCallback(element);

      minHeap.add(element);
    });

    // 现在我们有了最小堆，最小元素总是在最上面。
    // 让我们一一轮询最小元素，从而形成排序后的数组。
    while (!minHeap.isEmpty()) {
      const nextMinElement = minHeap.poll();

      // 调用访问回调
      this.callbacks.visitingCallback(nextMinElement);

      sortedArray.push(nextMinElement);
    }

    return sortedArray;
  }
}
