export default function solution(nums: number[], target: number): number[] {
  let counter: { [s: string]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    let idx = counter[nums[i].toString()];
    if (!Object.is(idx, undefined)) {
      return [idx, i];
    } else {
      counter[target - nums[i]] = i;
    }
  }
  return [0, 0];
}

//wrong answer
//如果這裡要用indexOf，一來會拖慢速度，二來還有很多index的資訊要處理
// export default function solution(nums: number[], target: number): number[] {
//   let resNums: number[] = nums.concat();
//   for (let i = 0; i < nums.length; i++) {
//     let idx = resNums.slice(i + 1).indexOf(target - nums[i]) + 1;
//     console.log("-----", i, "-----");
//     console.log("idx", idx);
//     console.log("nums[i]", nums[i]);
//     console.log("equal?", Object.is(idx, i));
//     console.log("idx > -1", idx > -1);
//     if (!Object.is(idx, i) && idx > 0) {
//       return [i, idx];
//     } else {
//       resNums = nums.slice(i + 1);
//     }
//   }
//   return [0, 0];
// }
