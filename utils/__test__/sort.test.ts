import mergeSort from "../mergeSort";
import HeapSort from "../heapSort";

describe("sort", () => {
  test("mergeSort", () => {
    const x = [4, 7, 1, 2, 5, 3, 8, 10, 33, 6, 77, 100, 101];
    expect(mergeSort(x)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 10, 33, 77, 100, 101,
    ]);
  });
  test("mergeSort", () => {
    const y = [10, 20, 30, 5, 7, 9, 11, 13, 15, 17, 35];
    expect(mergeSort(y)).toEqual([5, 7, 9, 10, 11, 13, 15, 17, 20, 30, 35]);
  });
  test("maxHeapSort", () => {
    const theArr = new HeapSort([4, 7, 1, 2, 5, 3, 8, 10, 33, 6, 77, 100, 101]);
    expect(theArr.heapSort()).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 10, 33, 77, 100, 101,
    ]);
  });
});
