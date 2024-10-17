const convertToCelsius = function(temp) {
  if (((temp-32)*(5/9)) % 1 !== ((temp-32)*(5/9))) {
    return Math.round(((temp-32)*(5/9)) * 10) / 10;  // Round to one decimal place
  }
  return ((temp-32)*(5/9));  // Return the number as is if no rounding is needed
  }

const convertToFahrenheit = function(temp) {
  if ((((9/5)*temp)+32) % 1 !== (((9/5)*temp)+32)) {
    return Math.round((((9/5)*temp)+32) *10) / 10;  // Round to one decimal place
  }
  return (((9/5)*temp)+32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};


