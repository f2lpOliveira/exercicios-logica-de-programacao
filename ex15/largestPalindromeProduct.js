// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

function largestPalindromeProduct() {
  let counter = 10;
  let arr = [];
  let result;

  for (let i = 10; i < 100; i++) {
    result = (counter * i).toString();
    if (result.length == 3 && result[0] == result[2]) {
      arr.push(counter * i);
    }
    if (i == 99) {
      if (counter < 100) {
        counter++;
        i = 9;
      }
    }
  }
  return Math.max(...arr);
}

console.log(largestPalindromeProduct());
