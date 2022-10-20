const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (Numbers) {
  return Numbers.reduce((sum, Number) => (sum += Number), 0);
};

const multiply = function (Numbers) {
  return Numbers.reduce((mul, Number) => (mul *= Number), 1);
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (Number) {
  let factorial = 1;
  for (let i = Number ; i > 0; i--) { factorial *= i; }
  return factorial;
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
