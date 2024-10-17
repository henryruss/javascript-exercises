const leapYears = function(year) {
    if ((year%100==0)&&(year%400==0)){
        return true; //1600 case
    }
    return ((year%4==0)&&(!(year%100==0)));
        ; //all leap years excluding those dividible by 100
    
};

// Do not edit below this line
module.exports = leapYears;
