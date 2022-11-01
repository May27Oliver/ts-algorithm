import twoSum from "../twoSum";
import palindrome from "../palindromeNumber";
import romanToInteger from "../romanToInteger";
import longestCommonPrefix from "../longestCommonPrefix";
import validParentheses from "../validParentheses";

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
});
