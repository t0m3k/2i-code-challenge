export const countPairs = (arr: number[], sum: number): number => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        count++;
      }
    }
  }
  return count;
}