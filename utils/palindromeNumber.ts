// export default function solution(x: number): boolean {
//   if (x < 0) {
//     return false;
//   }
//   let s: string = x.toString();
//   let j: number = s.length - 1;
//   let isPalindrom = true;
//   for (let i = 0; i <= j; i++) {
//     if (Object.is(s[i], s[j]) && i <= j) {
//       j--;
//     } else {
//       return false;
//     }
//   }
//   return isPalindrom;
// }

export default function solution(x: number): boolean {
  if (x < 0) {
    return false;
  }
  let init = x;
  let reverse = 0;
  while (init > 0) {
    let i = init % 10;
    init = Math.floor(init / 10);
    reverse = reverse * 10 + i;
  }
  return Object.is(reverse, x);
}
