const fibonacci = function(num) {
    num = parseInt(num)
    let result
    if (num < 0) {
        result = 'OOPS'
    } else 
    if ( num <= 2) {
        result = 1
    } else if (num > 2) {
        result = fibonacci(num - 1) + fibonacci(num - 2)
    } 
    return result
};

// Do not edit below this line
module.exports = fibonacci;
