/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.
給定一個由小到大的陣列，和一個目標數字，找尋該目標數字是否在陣列中，如果有，就回傳該目標數字在陣列中的位置，如果沒有，則回傳目標數字該在該陣列中第幾位？
leetcode 35
Input: nums = [1,3,5,6], target = 5
Output: 2
思路：Binary Search
1.將陣列切一半，查詢目標數字該在陣列左邊還是右邊
2.如果目標數值大於陣列中間那個元素，則以該值為起點到陣列最後一個元素再搜尋一次。
*/
export default function searchInsert(nums: number[], target: number): number {
  if (nums.length === 0 || nums === null) return 0;
  let i: number = 0,
    j: number = nums.length - 1,
    index: number = -1;
  while (i <= j) {
    index = Math.floor((i + j) / 2);
    if (nums[index] == target) {
      return index;
    }
    if (nums[index] >= target) {
      j = index - 1;
    } else {
      i = index + 1;
    }
  }
  return i;
}
