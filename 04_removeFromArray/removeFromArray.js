const removeFromArray1 = function (arr, ...args) {
    const arrLength = arr.length;
    const returnedArr = [];
    for (let i = 0; i < arrLength; i++) {
        if (args.indexOf(arr[i]) === -1) {
            returnedArr.push(arr[i]);
        }
    }
    return returnedArr;
};
const removeFromArray = function (arr, ...args) {
    const argsLength = args.length;
    for (let i = 0; i < argsLength; i++) {
        const index = arr.indexOf(args[i]);
        if (index !== -1) {
            arr.splice(index, 1);
        }
    }
    return arr;
};
// Do not edit below this line
module.exports = removeFromArray;
