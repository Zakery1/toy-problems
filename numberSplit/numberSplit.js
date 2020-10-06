// Given a number, return an array containing the two halves of the number.
//If the number is odd, make the rightmost number higher.

// Examples
// numberSplit(4) ➞ [2, 2]

// numberSplit(10) ➞ [5, 5]

// numberSplit(11) ➞ [5, 6]

// numberSplit(-9) ➞ [-5, -4]

function numberSplit(n) {
  let newArray = [];
  let quotientOne;
  let quotientTwo;
  let originalQuotient = n / 2;
  if (n % 2 === 1 || n % 2 === -1) {
    quotientOne = Math.floor(originalQuotient);
    quotientTwo = quotientOne + 1;
  } else {
    quotientOne = originalQuotient;
    quotientTwo = originalQuotient;
  }

  newArray.push(quotientOne, quotientTwo);
  return newArray;
}

//or

function numberSplit(n) {
	return [Math.floor(n/2), Math.ceil(n/2)]
}
numberSplit(-11);