// Add up the Numbers from a Single Number
// Create a function that takes a number as an argument.
// Add up all the numbers from 1 to the number you passed to the function.
// For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

function adder(number) {
  let total = 0;

  for (let i = number; i > 0; i--) {
    total += i;
  }
  return total;
}

adder(3);
