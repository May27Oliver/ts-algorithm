/*
    給定參數x，算出x平方根
    使用BTS
*/
export default function mySqrt(x: number): number {
  if (x <= 1) {
    return x;
  }
  let start: number = 0,
    end: number = x;
  while (end >= start) {
    let mid = start + Math.floor((end - start) / 2);
    if (mid * mid > x) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return end;
}
