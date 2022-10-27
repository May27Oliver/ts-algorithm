export default function solution(s: string): number {
  //羅馬數字讀法是由左到右，左邊大於右邊相加，左邊小於右邊，則得相減
  //由右向左檢查，若右大於左相減，若左大於右相加
  const counter: { [s: string]: number } = {
    z: 0,
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum: number = 0;
  let lastStr: string = "z";
  for (let i = s.length - 1; i >= 0; i--) {
    let word = s[i];
    if (counter[lastStr] <= counter[word]) {
      sum += counter[word];
    } else {
      sum -= counter[word];
    }
    lastStr = s[i];
  }
  return sum;
}
