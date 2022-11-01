/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

這題往stack先進後出的思路想
*/
export default function solution(s: string): boolean {
  const left: string[] = ["(", "[", "{"];
  const right: string[] = [")", "]", "}"];
  const counter: { [prop: string]: string } = { ")": "(", "]": "[", "}": "{" };
  let stack: string[] = [];
  for (let char of s) {
    if (left.indexOf(char) > -1) {
      stack = [...stack, char];
    }
    if (right.indexOf(char) > -1) {
      if (stack.length === 0) {
        return false;
      }
      let i = stack.length - 1;
      let lastCharOfStack = stack[i];
      stack = stack.slice(0, i);
      if (!Object.is(counter[char], lastCharOfStack)) {
        return false;
      }
    }
  }
  return Object.is(stack.length, 0);
}
