export default function mergeSort(arr: number[]): number[] {
  if (arr.length < 2) {
    return arr;
  }
  const midIdx = arr.length / 2;
  const arrLeft = mergeSort(arr.slice(0, midIdx));
  const arrRight = mergeSort(arr.slice(midIdx, arr.length));

  return merge(arrLeft, arrRight);
}

const merge = (left: number[], right: number[]): number[] => {
  let finalArr: number[] = [];
  let i = 0,
    j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      finalArr = [...finalArr, left[i]];
      i++;
    } else {
      finalArr = [...finalArr, right[j]];
      j++;
    }
  }
  for (; i < left.length; i++) {
    finalArr = [...finalArr, left[i]];
  }
  for (; j < right.length; j++) {
    finalArr = [...finalArr, right[j]];
  }
  return finalArr;
};
