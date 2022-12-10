import twoSum from "../twoSum";
import palindrome from "../palindromeNumber";
import romanToInteger from "../romanToInteger";
import longestCommonPrefix from "../longestCommonPrefix";
import validParentheses from "../validParentheses";
import mergeTwoLists from "../mergeTwoSortedLists";
import linkedList from "../../data_structure/linkedList";
import lengthOfLastWord from "../LengthOfLastWord";
import SearchInsertPosition from "../SearchInsertPosition";
import PlustOne from "../PlusOne";
import AddBinary from "../AddBinary";
import Sqrt from "../Sqrt";
import climbStair from "../70ClimbingStairs";
import inorderTraversal from "../94BinaryTreeInorderTraversal";
import { TreeNode } from "../../data_structure/tree";
import isSameTree from "../100SamTree";
import symmetricTree from "../101SymmetricTree";
import arrayBuildTreeByLevelTraveral from "../arrayBuildTree";

describe("leetcode test", () => {
  test("twoSum test1", () => {
    const testCase: number[] = [2, 7, 11, 15];
    expect(twoSum(testCase, 9)).toEqual([0, 1]);
  });

  test("twoSum test2", () => {
    const testCase: number[] = [3, 2, 4];
    expect(twoSum(testCase, 6)).toEqual([1, 2]);
  });

  test("twoSum test3", () => {
    const testCase: number[] = [3, 3];
    expect(twoSum(testCase, 6)).toEqual([0, 1]);
  });

  test("palindrom test1", () => {
    expect(palindrome(121)).toBeTruthy();
  });

  test("palindrom test2", () => {
    expect(palindrome(10)).toBeFalsy();
  });

  test("romanToInteger test1", () => {
    expect(romanToInteger("LVIII")).toBe(58);
  });

  test("romanToInteger test2", () => {
    expect(romanToInteger("III")).toBe(3);
  });

  test("romanToInteger test3", () => {
    expect(romanToInteger("MCMXCIV")).toBe(1994);
  });

  test("Longest Common Prefix test1", () => {
    const strs = ["flower", "flow", "flight"];
    expect(longestCommonPrefix(strs)).toBe("fl");
  });

  test("Longest Common Prefix test2", () => {
    const strs = ["dog", "racecar", "car"];
    expect(longestCommonPrefix(strs)).toBe("");
  });

  test("Valid Parentheses test1", () => {
    const s = "()";
    expect(validParentheses(s)).toBeTruthy();
  });

  test("Valid Parentheses test2", () => {
    const s = "()[]{}";
    expect(validParentheses(s)).toBeTruthy();
  });

  test("Valid Parentheses test3", () => {
    const s = "(]";
    expect(validParentheses(s)).toBeFalsy();
  });

  const list1: number[] = [1, 2, 4],
    list2: number[] = [1, 3, 4],
    linkedList1 = new linkedList<number>(),
    linkedList2 = new linkedList<number>();

  list1.forEach((data) => linkedList1.append(data));
  list2.forEach((data) => linkedList2.append(data));
  const testList = mergeTwoLists(linkedList1, linkedList2);

  //[1,1,2,3,4,4]
  test("mergeTwoSortedList1", () => {
    expect(testList?.data).toBe(1);
    expect(testList?.next?.data).toBe(1);
  });
  const list3: number[] = [],
    list4: number[] = [0],
    linkedList3 = new linkedList<number>(),
    linkedList4 = new linkedList<number>();
  list3.forEach((data) => linkedList3.append(data));
  list4.forEach((data) => linkedList4.append(data));
  const testList2 = mergeTwoLists(linkedList3, linkedList4);

  test("mergeTwoSortedList2", () => {
    expect(testList2?.data).toBe(0);
    expect(testList2?.next?.data).toBe(undefined);
  });

  //leetcode 58
  test("length of last word test1", () => {
    const s = "luffy is still joyboy";
    expect(lengthOfLastWord(s)).toBe(6);
  });

  test("length of last word test2", () => {
    const s = "   fly me   to   the moon";
    expect(lengthOfLastWord(s)).toBe(4);
  });

  test("length of last word test3", () => {
    const s = "Hello World";
    expect(lengthOfLastWord(s)).toBe(5);
  });

  // leetcode 35
  // Input: nums = [1,3,5,6], target = 5
  // Output: 2
  test("search insert position", () => {
    const nums: number[] = [1, 3, 5, 6];
    const target: number = 5;
    expect(SearchInsertPosition(nums, target)).toBe(2);
  });

  /*
    leetcode 66
    Input: digits = [1,2,3]
    Output: [1,2,4]
  */
  test("Plus One 1", () => {
    const digits = [1, 2, 3];
    expect(PlustOne(digits)).toEqual([1, 2, 4]);
  });

  /*
    Input: digits = [4,3,2,1]
    Output: [4,3,2,2]
  */
  test("Plus One 2", () => {
    const digits = [4, 3, 2, 1];
    expect(PlustOne(digits)).toEqual([4, 3, 2, 2]);
  });

  /*
    Input: digits = [9]
    Output: [1,0]
  */
  test("Plus One 3", () => {
    const digits = [9];
    expect(PlustOne(digits)).toEqual([1, 0]);
  });

  /*
    Input: digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
    Output: [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
  */
  test("Plus One 4", () => {
    const digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
    expect(PlustOne(digits)).toEqual([
      6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4,
    ]);
  });

  /*
    Input: a = "11", b = "1"
    Output: "100"
  */
  test("Add Binary 1", () => {
    const a = "11",
      b = "1";
    expect(AddBinary(a, b)).toBe("100");
  });

  /*
    Input: a = "1010", b = "1011"
    Output: "10101"
  */
  test("Add Binary 2", () => {
    const a = "1010",
      b = "1011";
    expect(AddBinary(a, b)).toBe("10101");
  });

  test("Add Binary 3", () => {
    const a =
        "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
      b =
        "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011";
    expect(AddBinary(a, b)).toBe(
      "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"
    );
  });

  test("Sqrt 1", () => {
    /*
      Input: x = 4
      Output: 2
    */
    const x = 4;
    expect(Sqrt(x)).toBe(2);
  });

  test("Sqrt 2", () => {
    /*
      Input: x = 4
      Output: 2
    */
    const x = 8;
    expect(Sqrt(x)).toBe(2);
  });

  //70 climbing stair
  test("climbing stair 1", () => {
    /*
      Input: n = 2
      Output: 2
    */
    const n = 2;
    expect(climbStair(n)).toBe(2);
  });

  it("climbing stair 2", () => {
    /*
      Input: n = 3
      Output: 3
    */
    const n = 3;
    expect(climbStair(n)).toBe(3);
  });

  // leetcode 94
  it("BinarySearch Inorder", () => {
    const node = new TreeNode(3);
    const right = new TreeNode(2, node);
    const root = new TreeNode(1, null, right);
    expect(inorderTraversal(root)).toEqual([1, 3, 2]);
  });

  /*
    leetcode 100
  */
  it(" Same Tree 1", () => {
    const pLeft = new TreeNode(2);
    const pRight = new TreeNode(3);
    const pRoot = new TreeNode(1, pLeft, pRight);

    const qLeft = new TreeNode(2);
    const qRight = new TreeNode(3);
    const qRoot = new TreeNode(1, qLeft, qRight);

    expect(isSameTree(pRoot, qRoot)).toBe(true);
  });

  it(" Same Tree 2", () => {
    const pLeft = new TreeNode(2);
    const pRoot = new TreeNode(1, pLeft);

    const qRight = new TreeNode(2);
    const qRoot = new TreeNode(1, null, qRight);

    expect(isSameTree(pRoot, qRoot)).toBe(false);
  });

  it(" Same Tree 3", () => {
    const pLeft = new TreeNode(2);
    const pRight = new TreeNode(1);
    const pRoot = new TreeNode(1, pLeft, pRight);

    const qLeft = new TreeNode(1);
    const qRight = new TreeNode(2);
    const qRoot = new TreeNode(1, qLeft, qRight);

    expect(isSameTree(pRoot, qRoot)).toBe(false);
  });
  /*
    leetcode 101
  */
  it("Symmetric tree 1", () => {
    const arr = [1, 2, 2, 3, 4, 4, 3];
    const root = arrayBuildTreeByLevelTraveral(arr);
    expect(symmetricTree(root)).toBe(true);
  });

  it("Symmetric tree 2", () => {
    const arr = [1, 2, 2, null, 3, null, 3];
    const root = arrayBuildTreeByLevelTraveral(arr);
    expect(symmetricTree(root)).toBe(false);
  });

  it("Symmetric tree 3", () => {
    const arr = [1, 0];
    const root = arrayBuildTreeByLevelTraveral(arr);
    expect(symmetricTree(root)).toBe(false);
  });

  // leetcode 104 Max Tree Depth
  // it("Maximum Depth of Binary Tree 1", () => {
  //   const root = [3, 9, 20, null, null, 15, 7];
  //   expect().toBe(3);
  // });
});
