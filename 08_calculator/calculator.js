const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(numbers) {
	return numbers.reduce(
    (total, number) => total + number,
    0);
};

const multiply = function(numbers) {
  return numbers.reduce(
    (total, number) => total * number,
    1);
};

const power = function(base, power) {
	let ans = base;
  for (let i = 1; i < power; i++) {
    ans *= base;
  }
  return ans;
};//assume power positive

const factorial = function(number) {
	let ans = 1;
  let i = number;
  while (i > 0) {
    ans *= i;
    i--;
  } 
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
