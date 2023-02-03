const sumAll = function(...rest) {
    let result = 0
    if ((typeof(rest[0]) !== 'number') || (typeof(rest[1]) !== 'number')) {
        result = 'ERROR'
    } else if ((rest[0] < 0) || (rest[1] < 0)) {
        result = 'ERROR'
    } else {
        rest.sort(function(a,b){return a-b})
        for (let i = rest[0]; i <= rest[1]; i++) {
            result = result + i
            console.log(i, result)
        }
    }
    return result
};

// Do not edit below this line
module.exports = sumAll;
