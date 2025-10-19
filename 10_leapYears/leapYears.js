const leapYears = function (year) {
  // Make sure we were given a positive whole number; otherwise bail out
  if (!Number.isInteger(year) || !year > 0) return "ERROR";

  // First confirm the year is divisible by 4, then verify century logic
  // Non-century years (not divisible by 100) are leap once divisible by 4
  // Century years must also be divisible by 400 to stay leap years
  if (!(year % 4) && (!!(year % 100) || !(year % 400))) return true;

  // If none of the leap criteria matched, it's a regular year
  return false;
};
// Do not edit below this line
module.exports = leapYears;
