const checkForWholeNum = (num: number): boolean => {
  return num % 1 === 0 && num >= 0;
}

export const checkArray = (arr: number[]): boolean => {
  return arr.length > 0 && arr.every(checkForWholeNum);
}