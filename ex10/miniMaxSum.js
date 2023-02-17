// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
// Example
// arr = [1, 3, 5, 7, 9]
// The minimum sum is 1 + 3 + 5 + 7 = 16 and the maximum sum is 3 + 5 + 7 + 9 = 24. The function prints 16 24.

function miniMaxSum(arr) {
  let menorNumero = Math.min(...arr);
  let maiorNumero = Math.max(...arr);

  let somaArrSemMenorNumero = 0;
  let somaArrSemMaiorNumero = 0;

  let positionMinSum = arr.indexOf(menorNumero);
  let positionMaxSum = arr.indexOf(maiorNumero);

  let arrSemMenorNumero = arr.slice();
  let arrSemMaiorNumero = arr.slice();

  arrSemMenorNumero.splice(positionMinSum, 1);
  arrSemMaiorNumero.splice(positionMaxSum, 1);

  arrSemMenorNumero.forEach(numero => (somaArrSemMenorNumero += numero));
  arrSemMaiorNumero.forEach(numero => (somaArrSemMaiorNumero += numero));

  return console.log(somaArrSemMaiorNumero, somaArrSemMenorNumero);
}

miniMaxSum([1, 3, 5, 7, 9]);
