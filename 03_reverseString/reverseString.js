const reverseString = function(str) {
    let value = '';
    for (let i = str.length - 1; i >= 0; i--) {
        value += str[i];
    }
    return value;
};

// Do not edit below this line
module.exports = reverseString;
