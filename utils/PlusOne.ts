/*
Given two binary strings a and b, return their sum as a binary string.
*/
export default function plusOne(digits: number[]): number[] {
  /*
    1. 檢查最後一個值，加一，
    2. 如果遇到9，在下個位置繼續加一
  */
  let carry = false;
  for (let i = digits.length - 1; i >= 0; i--) {
    let num = digits[i];
    if (i === digits.length - 1 && num === 9) {
      digits[i] = 0;
      carry = true;
      continue;
    } else if (i === digits.length - 1 && num < 9) {
      digits[i] = digits[i] + 1;
      carry = false;
      continue;
    }
    if (carry && num < 9) {
      digits[i] = digits[i] + 1;
      carry = false;
    } else if (carry && num === 9) {
      digits[i] = 0;
      carry = true;
    }
  }
  if (carry) {
    digits = [1, ...digits];
  }
  return digits;
}
