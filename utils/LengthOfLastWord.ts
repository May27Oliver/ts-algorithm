export default function lengthOfLastWord(s: string): number {
  const lastChar = s.trim().split(" ").reverse()[0].trim();
  return lastChar.length;
}
