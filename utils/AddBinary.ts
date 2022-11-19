/*
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
Increment the large integer by one and return the resulting array of digits.
1.原本想把字串轉成數字相加，但會發現數字可能會超過Number的範圍。
2.先把字串reverse，對齊兩字串的個位數字，跑迴圈相加
3.設定一個變數carry處理進位問題。
4.先處理長短字串相加
5.處理餘下長字串進位

reference:
https://skyyen999.gitbooks.io/-leetcode-with-javascript/content/questions/67md.html
*/
export default function addBinary(a: string, b: string): string {
  let longStr: string,
    shortStr: string,
    sumString: string = "",
    shortChar = 0,
    longChar = 0,
    i = 0,
    carry = 0;

  if (a.length > b.length) {
    longStr = a;
    shortStr = b;
  } else {
    longStr = b;
    shortStr = a;
  }
  let shortLen = shortStr.length,
    longLen = longStr.length;

  //對齊兩個字串
  longStr = longStr.split("").reverse().join("");
  shortStr = shortStr.split("").reverse().join("");

  //處理長短字串與carry相加
  while (i < longStr.length || carry != 0) {
    if (i < shortLen) {
      shortChar = parseInt(shortStr.charAt(i));
    } else {
      shortChar = 0;
    }
    if (i < longLen) {
      longChar = parseInt(longStr.charAt(i));
    } else {
      longChar = 0;
    }
    let num = shortChar + longChar + carry;
    if (num > 1) {
      //大於一就進位
      carry = 1;
      num = num % 2;
    } else {
      carry = 0;
    }
    sumString = num.toString() + sumString;
    i++;
  }
  return sumString;
}
