const sumAll = function (...args) {
  // Check user input, if one the input is not valid, return "ERROR"
  if (!args.every((item) => Number.isInteger(item) && item > 0)) {
    return "ERROR";
  }
  // If the input is valid, sort the input
  args.sort();

  // Destructure the `args` array into start point and end point
  let start, end;
  [start, end] = args;

  // Populate the array with Array.from
  // Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
  const range = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  return range.reduce((acc, curr) => acc + curr);
};

// Do not edit below this line
module.exports = sumAll;
