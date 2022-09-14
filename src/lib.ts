import { TMode } from "./pages/simpleSubstitution";

export function toAscii(string: string) {
  const asciiArr: number[] = [];
  for (let i = 0; i < string.length; i++) {
    const ascii = string.charCodeAt(i);
    asciiArr.push(ascii);
  }
  return asciiArr;
}

export function shiftAsciiArr(arr: number[], shift: number, options?: TMode) {
  const resultArr: number[] = [];
  arr.forEach((ascii) => {
    let result = ascii + shift;
    if (options === "alphabet") {
      if (result > 122) result -= 26;
      result -= 32;
    }
    resultArr.push(result);
  });
  return resultArr;
}
