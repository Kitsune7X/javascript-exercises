const palindromes = function (str) {
  // Remove white spaces, work breaks and punctuation
  // Reverse the string to see if it is the same as the filtered string
  let newstr = str.toLowerCase().split("");
  let newarr = newstr.filter(
    (word) =>
      (word.charCodeAt(0) >= 97 && word.charCodeAt(0) <= 122) ||
      (word.charCodeAt(0) >= 48 && word.charCodeAt(0) <= 57)
  );
  return newarr.join("") === newarr.reverse().join("");
};

console.log(palindromes("racecar"));

console.log(palindromes("A car, a man, a maraca."));

// Do not edit below this line
module.exports = palindromes;
