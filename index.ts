import { countPairs } from "./countPairs";
import { checkArray } from "./checkArray";

const arrays: number[][] = [];

arrays.push([1, 2, 3, 4]); // should return 0
arrays.push([1, 10, 32]) // should return 1
arrays.push([-1, 10, 32]) // should return invalid array message
arrays.push([1.5, 2, 40]) // should return invalid array message

const main = () => {
  arrays.forEach((arr) => {
    if(checkArray(arr)) {
      console.log(countPairs(arr, 42));
    } else {
      console.log("Invalid array");
    }
  });
}

main();