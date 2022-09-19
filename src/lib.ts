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

export function toUppercase(arr: string[]) {
  const resultArr: string[] = [];
  arr.forEach((str) => {
    const ascii = str.charCodeAt(0) - 32;
    resultArr.push(String.fromCharCode(ascii));
  });
  return resultArr;
}

export function shuffle<T>(arr: T[]) {
  const result = [...arr];
  let current = arr.length;
  let random;

  while (current > 0) {
    random = Math.floor(Math.random() * current);
    current--;
    [result[current], result[random]] = [result[random], result[current]];
  }

  return result;
}
