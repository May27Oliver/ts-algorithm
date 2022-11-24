/*
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
n = 1 => 1
n = 2 => 2
n = 3 => 3
n = 4 => 5
n = 5 => 8
n = 6 => 13
:Fibonacci
*/
export default function climbStairs(n: number): number {
  let first: number = 1,
    second: number = 1,
    temp: number,
    i: number = 0;

  while (i < n) {
    temp = second;
    second = first + second;
    first = temp;
    i++;
  }

  return first;
}
