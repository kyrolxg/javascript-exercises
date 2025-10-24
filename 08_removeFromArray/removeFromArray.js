const removeFromArray = function(arr, ...values) {
    let result = [];
    for(const val of arr){
        if (!values.includes(val)){
            result.push(val);
        }
    }

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
