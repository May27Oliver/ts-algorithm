import { TreeNode } from "../data_structure/tree";

export default function arrayBuildTreeByLevelTraveral(arr: (number | null)[]) {
  const treeArr = arr.map((item) =>
    typeof item === "number" ? new TreeNode(item) : null
  );
  const addLeftTreeNode = (i: number): void => {
    const node = treeArr[i];
    if (!node) {
      return;
    }
    node.left = treeArr[2 * i + 1];
    addLeftTreeNode(2 * i + 1);
    addLeftTreeNode(2 * i + 2);
  };
  const addRightTreeNode = (i: number): void => {
    const node = treeArr[i];
    if (!node) {
      return;
    } else {
      node.right = treeArr[2 * i + 2];
      addRightTreeNode(2 * i + 1);
      addRightTreeNode(2 * i + 2);
    }
  };
  addLeftTreeNode(0);
  addRightTreeNode(0);
  return treeArr[0];
}
