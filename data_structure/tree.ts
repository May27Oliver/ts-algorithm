/*
tree
tree is "acyclic graph"
tree is a graph without a loop，tree是沒有循環的。
tree must have a root,and the only root,tree每個node只能有一個root
--- left - root - right ----
樹有很多種
Binary Tree(二元樹)：每個root最多只能有兩個子元素。
Binary Search Tree：二元樹中， parent node > 右邊子節點 > 左邊子節點，稱為Binary Search Tree。
以二元樹原則組成的資料結構在找尋資料的速度是很快的，為O(log n)
Complete Binary Tree：是個幾乎滿的二元樹。
Full Binary Tree：滿的二元樹，所有的leaf(最外層的子節點)都有一樣的深度。
Max Heap：是個complete binary tree，且每個node都要比自己的child來得大，最大的值必定在第一個root。
*/

/*
tree traversal 樹的遍歷法
1.breadth-first tree traversal 寬度優先遍歷法
2.depth-first tree traversl 深度優先遍歷法
第二種又有
2-1. preorder 中左右
2-2. inorder	左中右
2-3. postOrder	左右中
*/

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
export class BinarySearchTree {
  root: TreeNode | null;
  nodes: number[] = [];
  constructor(node?: TreeNode | null) {
    this.root = node || null;
  }
  insert(node: TreeNode | null = this.root, val: number): TreeNode {
    if (node === null) {
      return new TreeNode(val);
    } else {
      if (node.val < val) {
        //比data大放右邊
        node.right = this.insert(node.right, val);
      } else {
        node.left = this.insert(node.left, val);
      }
    }
    return node;
  }
  search(node: TreeNode | null = this.root, val: number): boolean {
    if (!node) return false;
    if (node.val === val) {
      return true;
    } else if (node.val < val) {
      return this.search(node.right, val);
    } else {
      return this.search(node.left, val);
    }
  }
  print(): void {
    console.log(this.root ? this.root.val : "");
  }
  //inorder traversal左中右
  inorderTraversal(node: TreeNode | null = this.root): void {
    if (!node) return;
    this.inorderTraversal(node.left);
    this.nodes = [...this.nodes, node.val];
    this.inorderTraversal(node.right);
  }
}

const BSTree = new BinarySearchTree();
