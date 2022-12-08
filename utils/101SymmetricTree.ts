import { TreeNode } from "../data_structure/tree";
/*
    Given the root of a binary tree, 
    check whether it is a mirror of itself (i.e., symmetric around its center).
*/

export default function isSymmetric(root: TreeNode | null): boolean {
  const isSameTree = (
    left: TreeNode | null,
    right: TreeNode | null
  ): boolean => {
    if (left === null || right === null) {
      return left === right;
    }
    if (left.val !== right.val) {
      return false;
    }
    return (
      isSameTree(left.left, right.right) && isSameTree(left.right, right.left)
    );
  };
  if (!root || (!root.left && !root.right)) {
    return true;
  } else {
    return isSameTree(root.left, root.right);
  }
}
