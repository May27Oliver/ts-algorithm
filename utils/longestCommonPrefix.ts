export default function solution(strs: string[]): string {
  //字串方法，取出substring，再用indexOf搜尋是否有共同的prefix
  let s = strs[0];
  for (let ed = 1; ed < s.length; ed++) {
    let substr = s.substring(0, ed);
    for (let i = 1; i < strs.length; i++) {
      if (strs[i].indexOf(substr) !== 0) {
        if (substr.length > 1) {
          return s.substring(0, ed - 1);
        } else {
          return "";
        }
      }
    }
  }
  return s;
}
