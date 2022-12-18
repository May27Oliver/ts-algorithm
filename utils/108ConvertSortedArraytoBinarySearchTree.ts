import { TreeNode } from "../data_structure/tree";
/*
Given an integer array nums where the elements are sorted in ascending order, convert it to a 
height-balanced binary search tree.

height-balanced 指平衡樹，一個Binary Tree的深度左右兩邊相當。
DFS(深度優先原則)
*/
export default function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length === 0) {
    return null;
  }
  if (nums.length === 1) {
    return new TreeNode(nums[0]);
  }
  const midIdx = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[midIdx]);
  root.left = sortedArrayToBST(nums.slice(0, midIdx));
  root.right = sortedArrayToBST(nums.slice(midIdx + 1));
  return root;
}

export class DFSforSortedArray108 {
  arr: number[];
  constructor() {
    this.arr = [];
  }
  DFSforSortedArray = (root: TreeNode | null) => {
    if (root === null) {
      return;
    }
    this.arr = [...this.arr, root.val];
    this.DFSforSortedArray(root.left);
    this.DFSforSortedArray(root.right);
  };
}
