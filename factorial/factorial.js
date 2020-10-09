// Write a function that takes a non-negative integer and return its factorial.

// factorial(4) ➞ 24

// factorial(0) ➞ 1

// factorial(9) ➞ 362880

function factorial(z) {
	return z < 2 ? 1 : z * factorial(z-1);
}