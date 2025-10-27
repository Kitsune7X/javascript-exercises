const fibonacci = function (number) {
  // Valid input check
  if (Number.isNaN(+number) || number < 0) return "OOPS";
  let arr = [];
  if (+number === 0) return 0;
  for (let i = 0; i < number; i++) {
    if (i <= 1) {
      arr.push(1);
    } else {
      // Fibonacci formular
      let y = arr[i - 1] + arr[i - 2];
      arr.push(y);
    }
  }
  return arr[number - 1];
};

// Do not edit below this line
module.exports = fibonacci;
