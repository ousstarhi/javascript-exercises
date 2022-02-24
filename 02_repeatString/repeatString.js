const repeatString = function (str, n) {
    if (n < 0) {
        return 'ERROR';
    }
    let message = '';
    for (let i = 0; i < n; i++) {
        message += str;
    }
    return message;
};

// Do not edit below this line
module.exports = repeatString;
