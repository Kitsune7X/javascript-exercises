const add = function (x, y) {
  return parseFloat(x) + parseFloat(y);
};

const subtract = function (x, y) {
  if (!(typeof x === "number") || !(typeof y === "number")) return "ERROR";
  return x - y;
};

const sum = function (arr) {
  return arr.reduce((acc, curr) => {
    // Check for all items in the array are numbers
    if (!(typeof acc === "number") || !(typeof curr === "number"))
      return "ERROR";

    return acc + curr;
  }, 0);
};

const multiply = function (arr) {
  return arr.reduce((acc, curr) => {
    // Check for valid input
    if (!(typeof acc === "number") || !(typeof curr === "number"))
      return "ERROR";

    return acc * curr;
  }, 1);
};

const power = function (x, y) {
  // Check for valid input
  if (!(typeof x === "number") || !(typeof y === "number")) return "ERROR";
  // Trying to calculate power with recursive
  if (y === 0) return 1;
  if (y % 2 === 0) {
    if (y === 2) return x * x;
    return power(power(x, y / 2), 2);
  }
  return x * power(x, y - 1);
};

/* 
power(2, 5)
│
├──> 2 * power(2, 4)
│       │
│       ├──> power(power(2, 2), 2)
│       │         │
│       │         ├──> power(2, 2)
│       │         │       └──> 2 * 2 = 4
│       │         └──> power(4, 2)
│       │                └──> 4 * 4 = 16
│       └──> returns 16
│
└──> 2 * 16 = 32

*/

const factorial = function (x) {
  // Trying to calculate factorial with recursive
  // Check for correct input
  if (!(typeof x === "number")) return "ERROR";
  // Check for edge cases
  if (x === 0 || x === 1) return 1;

  // Recursive time! ORA! ORA! ORA!
  return x * factorial(x - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
