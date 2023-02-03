const repeatString = function(string, num) {
    num = parseInt(num)
    let newString = ''
    if (string === '') {
        newString = ''
    }else if (num >0 ) {
        for (let i= 1; i<=num; i++) {
            newString+= string
        }
    } else if (num < 0) {
        newString ='ERROR'
    } else if (num === 0) {
        newString = ''
    }
    
    return newString
};

// Do not edit below this line
module.exports = repeatString;
