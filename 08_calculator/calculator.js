const add = function(a, b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
	let result = 0
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
};

const multiply = function(array) {
  let result = 1
  for (let i = 0; i < array.length; i++) {
    result *= array[i];
  }
  return result;
};

const power = function(a, b) {
  result = 1
	for (let i = 1; i <= b; i++) {
    result *=a 
  }
  return result
};

const factorial = function(a) {
	let result = 1
  if (a > 0) {
    for (let i = 1; i <= a; i++) {
      result *= i
    }
  }
  return result
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
