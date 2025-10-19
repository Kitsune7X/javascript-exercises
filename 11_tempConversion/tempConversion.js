const convertToCelsius = function (fahrenheit) {
  // Check for valid input first
  if (typeof fahrenheit !== "number") return "ERROR";

  // Convert to Celsius and store the value in a variable for easier viewing
  const celsius = (fahrenheit - 32) * (5 / 9);

  // Round the computed Celsius value to a single decimal place before returning it
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function (celsius) {
  // Check for valid input first
  if (typeof celsius !== "number") return "ERROR";

  // Convert to Fahrenheit and store the value in a variable for easier viewing
  const fahrenheit = celsius * (9 / 5) + 32;

  // Round the computed Fahrenheit value to a single decimal place before returning it
  return Math.round(fahrenheit * 10) / 10;
};
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
