// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

function largestPrimeFactor(number) {
  let primeFactors = [];
  let counter = number;
  let maxNumberPrime = 0;

  for (i = 2; i < Math.sqrt(counter); i++) {
    if (number % i == 0) {
      number = number / i;
      primeFactors.push(i);
      if (i > maxNumberPrime) {
        maxNumberPrime = i;
      }
    }
  }
  return maxNumberPrime;
}
console.log(largestPrimeFactor(600851475143));
