//max heap means a complete binary tree where the largest node is always at the root  for any sub-trees.
/*
three steps:
1. build maxheap
2. max heapify
3. heap sort
*/
class HeapSort {
  constructor(arr: number[]) {
    this.arr = arr;
    this.heapSize = arr.length - 1;
  }
  arr: number[];
  heapSize: number;
  private buildMaxHeap() {
    for (let i = Math.floor(this.heapSize / 2); i >= 0; i--) {
      this.maxHeapify(i);
    }
  }
  private maxHeapify(i: number) {
    let largest = i;
    let left = i * 2 + 1;
    let right = i * 2 + 2;
    if (left <= this.heapSize && this.arr[left] > this.arr[largest]) {
      largest = left;
    }
    if (right <= this.heapSize && this.arr[right] > this.arr[largest]) {
      largest = right;
    }
    if (largest != i) {
      this.swap(i, largest);
      this.maxHeapify(largest);
    }
  }
  public heapSort(): number[] {
    this.buildMaxHeap();
    for (let i = this.arr.length - 1; i >= 0; i--) {
      this.swap(0, i);
      this.heapSize -= 1;
      this.maxHeapify(0);
    }
    return this.arr;
  }
  private swap(i: number, j: number) {
    const temp = this.arr[i];
    this.arr[i] = this.arr[j];
    this.arr[j] = temp;
  }
}

export default HeapSort;
