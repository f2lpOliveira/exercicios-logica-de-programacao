// In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

let sum = [2, 3, 4, 5, 6];

function aVeryBigSum(sum) {
  let total = 0;
  for (let i = 0; i < sum.length; i++) {
    total += sum[i];
  }
  return total;
}

console.log(aVeryBigSum(sum));
