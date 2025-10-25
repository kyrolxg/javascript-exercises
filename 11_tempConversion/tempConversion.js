const convertToCelsius = function(degrees) {
  let result = (degrees - 32) * (5/9);
  if(Number.isInteger(result)) return result;
  return parseFloat(result.toFixed(1));
};

const convertToFahrenheit = function(degrees) {
  let result = degrees*(9/5) + 32;
  if(Number.isInteger(result)) return result;
  return parseFloat(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
