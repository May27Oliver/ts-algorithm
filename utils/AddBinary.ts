/*
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
Increment the large integer by one and return the resulting array of digits.
*/
//Better one
export default function addBinary(a: string, b: string): string {
  let sumString: string = "",
    carry = 0, //進位
    i = a.length - 1, //a pointer
    j = b.length - 1; //b pointer

  //處理長短字串與carry相加
  while (j >= 0 || i >= 0 || carry != 0) {
    if (i >= 0) {
      carry += parseInt(a.charAt(i));
      i--;
    }
    if (j >= 0) {
      carry += parseInt(b.charAt(j));
      j--;
    }
    sumString = (carry % 2).toString() + sumString;
    carry > 1 ? (carry = 1) : (carry = 0);
  }
  return sumString;
}

// first method
// export default function addBinary(a: string, b: string): string {
//   let longStr: string,
//     shortStr: string,
//     sumString: string = "";

//   if (a.length > b.length) {
//     longStr = a;
//     shortStr = b;
//   } else {
//     longStr = b;
//     shortStr = a;
//   }
//   let carry = 0;

//   //對齊兩個字串
//   longStr = longStr.split("").reverse().join("");
//   shortStr = shortStr.split("").reverse().join("");

//   //處理長短字串相加
//   for (let i = 0; i < shortStr.length; i++) {
//     let num =
//       parseInt(shortStr.charAt(i)) + parseInt(longStr.charAt(i)) + carry;
//     if (num > 1) {
//       //大於一就進位
//       carry = 1;
//       num = num % 2;
//     } else {
//       carry = 0;
//     }
//     sumString = num.toString() + sumString;
//   }

//   //處理餘下的長字串進位
//   for (let j = shortStr.length; j < longStr.length; j++) {
//     let num = parseInt(longStr.charAt(j)) + carry;
//     if (num > 1) {
//       carry = 1;
//       num = num % 2;
//     } else {
//       carry = 0;
//     }
//     sumString = num.toString() + sumString;
//   }
//   //如果最後carry還有數字，就放到字串最前面
//   if (carry === 1) {
//     return "1" + sumString;
//   } else {
//     return sumString;
//   }
// }
