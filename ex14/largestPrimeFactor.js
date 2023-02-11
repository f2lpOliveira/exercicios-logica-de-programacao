// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

function largestPrimeFactor(number) {
  let primeFactors = [];
  let counter = number;
  let maxNumberPrime = 0;
  let i = 0;

  while (i < counter) {
    if (number % i == 0 && i != 1) {
      number = number / i;
      i = i;
      primeFactors.push(i);
      if (i > maxNumberPrime) {
        maxNumberPrime = i;
      }
    } else {
      i++;
    }
  }
  return `Prime factors of ${counter} are: ${primeFactors} and the largest prime factor is: ${maxNumberPrime}.`;
}
console.log(largestPrimeFactor(13195));
