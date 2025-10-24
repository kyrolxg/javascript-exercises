const reverseString = function(str) {
    const strArr = str.split("");
    strArr.reverse();
    str = strArr.join("");
    return str;
};

// Do not edit below this line
module.exports = reverseString;
