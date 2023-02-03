const palindromes = function (string) {
    let isPalindromed = false;
    string = string.toLowerCase()
    const regex = /[a-z]/g
    const newArray = string.match(regex)
    const arrayLength = newArray.length
    for (let i = 0; i <= arrayLength / 2 - 1 ; i++) {
        if (newArray[i]!== newArray[arrayLength - i - 1]) {
            isPalindromed = false;
            break;
        } else {
            isPalindromed = true;
        }
    }
    return isPalindromed
};

// Do not edit below this line
module.exports = palindromes;
