const repeatString = function(word, times) {
    if(times  < 0) {
        return "ERROR";
    }
    let concatString = "";
    for (let i = 0; i < times; i++) {
        concatString += `${word}`;
    }
    return concatString;
};
// console.log("Hello")

// Do not edit below this line
module.exports = repeatString;
