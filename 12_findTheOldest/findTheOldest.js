const findTheOldest = function(array) {
    const d = new Date()
    const currentYear = d.getFullYear()
    
    
    array.forEach(item => {
        if (item.yearOfDeath === undefined) {
            item.yearOfDeath = currentYear
        }
    })


    const result = array.reduce((prevValue, currValue) => {
        
        const currentValueAge = currValue.yearOfDeath - currValue.yearOfBirth + 1;
        const prevValueAge = prevValue.yearOfDeath - prevValue.yearOfBirth + 1;
        return (currentValueAge > prevValueAge) ? currValue : prevValue;
    },{...array[0]})
    return result;
};

// Do not edit below this line
module.exports = findTheOldest;
