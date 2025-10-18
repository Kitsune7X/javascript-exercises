const reverseString = function (str) {
    let reversedArr = [];
    // Interate through the string from tail to head
    for (let i = str.length - 1; i >= 0; i--) {
        // Push all the char into an array
        reversedArr.push(str[i]);
    }
    // Join the elements to a string
    return reversedArr.join("");
};

// Do not edit below this line
module.exports = reverseString;
