// find the frequency of an element where duplicates are present . here Target is to 6.

let FrequencyCount = function (arr, target, flag) {
  let result = -1;

  let low = 0,
    high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      //we got the answer but storing it in tmp var and doing futher investigation.
      result = mid;
      //futher investagtion
      if (flag === true) {
        high = mid - 1;
      }
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else high = mid - 1;
  }
  return result;
};

arr = [1, 1, 2, 2,5, 5, 6, 6, 6, 6, 9, 10, 11];
let target = 6;
console.log(FrequencyCount(arr, target, true));
