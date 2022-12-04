import { TreeNode } from "../data_structure/tree";

export default function isSameTree(
  p: TreeNode | null,
  q: TreeNode | null
): boolean {
  /*
  1.檢查雙方是否一為null一為treeNode
  */
  if (p === null) {
    //p 為null
    if (p === q) {
      return true;
    } else {
      return false;
    }
  }
  if (q === null) {
    if (p !== q) {
      return false;
    }
  }
  return [
    isSameTree(p.left, q.left),
    p.val === q.val,
    isSameTree(p.right, q.right),
  ].every(Boolean);
}
