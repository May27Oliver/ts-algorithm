import { TreeNode } from "../data_structure/tree";

export default function maxDepth(root: TreeNode | null): number {
  let arr: number[] = [];
  const inorderTraversal = (node: TreeNode | null = root) => {
    if (node === null) {
      return [];
    }
    inorderTraversal(node.left);
    arr = [...arr, node.val];
    inorderTraversal(node.right);
  };
  inorderTraversal(root);
  let len = arr.length,
    layer = 1,
    pointer = 1;
  while (layer < len) {
    layer * 2;
    pointer++;
  }
  return pointer;
}
