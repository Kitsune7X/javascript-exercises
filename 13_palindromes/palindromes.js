const palindromes = function (str) {
  // Remove white spaces, work breaks and punctuation
  // Reverse the string to see if it is the same as the filtered string
  let arrFromStr = str
    // Make a array of lowercase char from str
    .toLowerCase()
    .split("")
    .filter(
      // Filter only letters that are either alphabetic or an integer
      (word) =>
        (word.charCodeAt(0) >= 97 && word.charCodeAt(0) <= 122) ||
        (word.charCodeAt(0) >= 48 && word.charCodeAt(0) <= 57)
    );
  return arrFromStr.join("") === arrFromStr.reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
