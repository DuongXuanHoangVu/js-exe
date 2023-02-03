const removeFromArray = function(array, ...rest) {
    const newArray = array.filter(item => {
        return !rest.includes(item);
    })
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
