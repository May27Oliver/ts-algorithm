import { TreeNode } from "../data_structure/tree";
import maxDepth from "./104MaximumDepthOfBinaryTree";

export default function isBalanced(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }
  const diff = Math.abs(maxDepth(root.left) - maxDepth(root.right)) <= 1;
  return diff && isBalanced(root.right) && isBalanced(root.left);
}
