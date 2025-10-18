const removeFromArray = function (arr) {
    // Filter out the element from the array
    // return arr.filter(item => item !== ele);
    const args = [...arguments].slice(1);

    return arr.filter((item) => !args.includes(item));
};
// Do not edit below this line
module.exports = removeFromArray;
