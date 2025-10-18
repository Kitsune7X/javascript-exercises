const removeFromArray = function (arr, ...args) {
    // Filter the array, keeping only elements NOT included in args
    return arr.filter((item) => !args.includes(item));
};
// Do not edit below this line
module.exports = removeFromArray;
