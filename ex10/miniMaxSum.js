// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
// Example
// arr = [1, 3, 5, 7, 9]
// The minimum sum is 1 + 3 + 5 + 7 = 16 and the maximum sum is 3 + 5 + 7 + 9 = 24. The function prints 16 24.

function miniMaxSum(arr) {
  let miniSum = 0;
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      miniSum += arr[i];
      if (arr[arr.length - 1] > arr[arr.length - 2]) {
        maxSum += arr[arr.length - [i + 1]];
      }
    }
  }
  console.log(miniSum, maxSum);
}

miniMaxSum([1, 2, 3, 4, 5]);
