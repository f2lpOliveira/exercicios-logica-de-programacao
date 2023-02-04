// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// For example, the square matrix arr is show below:
// 1 2 3
// 4 5 6
// 9 8 9
// The left-to-right diagonal = 1 + 5 + 9 = 15. The right to left diagonal = 3 + 5 + 9 = 17. Their absolute difference is |15 - 17| = 2.

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

function diagonalDifference(matrix) {
  let sumLeft = 0;
  let sumRight = 0;
  let differenceLeftRight = 0;

  for (let i = 0; i < matrix.length; i++) {
    sumLeft += matrix[i][i];
    sumRight += matrix[i][matrix.length - 1 - i];
    differenceLeftRight = (sumLeft - sumRight) * -1;
  }
  return [sumLeft, sumRight, differenceLeftRight];
}

console.log(diagonalDifference(matrix));
