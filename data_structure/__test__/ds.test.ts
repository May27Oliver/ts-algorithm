import linkedList from "../linkedList";
import { BinarySearchTree, TreeNode } from "../tree";

describe("data structure testing", () => {
  const list = new linkedList();
  test("linked list", () => {
    const arr = [4, 7, 1, 2, 5, 3, 8, 10, 33, 6, 77, 100, 101];
    arr.forEach((val) => {
      list.append(val);
    });
    expect(list.size).toEqual(13);
    expect(list.indexOf(2)).toBe(3);
    list.deleteNode(2);
    expect(list.size).toBe(12);
    list.insert(2, 3);
    expect(list.indexOf(2)).toEqual(3);
    list.append(55);
    expect(list.size).toBe(14);
  });
});
