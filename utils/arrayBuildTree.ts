import { TreeNode } from "../data_structure/tree";

export default function arrayBuildTreeByLevelTraveral(arr: (number | null)[]) {
  const treeArr = arr.map((item) =>
    typeof item === "number" ? new TreeNode(item) : null
  );
  const addTreeNode = (i: number): void => {
    const node = treeArr[i];
    if (!node) {
      return;
    }
    node.left = treeArr[2 * i + 1];
    node.right = treeArr[2 * i + 2];
    addTreeNode(2 * i + 1);
    addTreeNode(2 * i + 2);
  };
  addTreeNode(0);
  return treeArr[0];
}
