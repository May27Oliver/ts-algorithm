import { TreeNode } from "../data_structure/tree";

export default function inorderTraversal(root: TreeNode | null): number[] {
  if (root === null) {
    return [];
  }

  return [
    ...inorderTraversal(root.left),
    root.val,
    ...inorderTraversal(root.right),
  ];
}
