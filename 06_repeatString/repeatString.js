const repeatString = function(str, num) {
    if(num<0) return "ERROR";
    let copyStr = '';
    for(let i = 0; i<num; i++){
        copyStr+=str;
    }
    return copyStr;
};

// Do not edit below this line
module.exports = repeatString;
