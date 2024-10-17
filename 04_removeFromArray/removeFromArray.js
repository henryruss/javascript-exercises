const removeFromArray = function(array, ...num) {
    let newArray = [];
    
    for (let j=0; j<num.length; j++){
    for (let i=0; i<array.length; i++){
        if (array[i]===num[j]){
        array.splice(i,1);
        i--;
        }
    }
    }

    return array;
}

// Do not edit below this line
module.exports = removeFromArray;
