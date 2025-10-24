const sumAll = function(a, b) {
    if(a < 0 || b < 0
        || !Number.isFinite(a) || !Number.isFinite(b)
        || !Number.isInteger(a) || !Number.isInteger(b)
    ) return "ERROR";

    let sum = 0;
    let larger, smaller;
    if(a>b){
        larger = a;
        smaller = b;
    } else{
        larger = b;
        smaller = a;
    }
    for(let i = smaller; i<=larger; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
