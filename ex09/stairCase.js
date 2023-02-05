// Staircase detail
// This is staircase of size = 4:
//    #
//   ##
//  ###
// ####
// Its base and height are both equal to n. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.
// Write a program that prints a staircase of size n.

let start = 4;

function stairCase() {
  let value = " ";
  let char = "#";
  for (let i = 1; i <= start; i++) {
    console.log(value.repeat(start - i) + char.repeat(i));
  }
}

stairCase();
