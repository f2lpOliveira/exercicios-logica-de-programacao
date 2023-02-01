// Given an array of integers, find the sum of its elements.
// For example, if the array ar = [1, 2, 3], 1 + 2 + 3 = 6, so return 6.

let ar = [1, 2, 3];

function simpleArraySum(ar) {
  let soma = 0;
  for (i = 0; i < ar.length; i++) {
    soma += ar[i];
  }
  return soma;
}

console.log(simpleArraySum(ar));
