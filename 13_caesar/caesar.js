const caesar = function (string, num) {
    const newArray = string.split('')
    console.log(newArray)
    for (let i = 0; i < newArray.length; i++) {
        let charCode = newArray[i].charCodeAt()
        const lowerCase = charCode >= 97 && charCode <= 122
        const upperCase = charCode >= 65 && charCode <= 90
        if (upperCase) {
          let newCharCode = charCode + num
          if (newCharCode < 65) {
            newArray[i] = (((65 - newCharCode) % 26 !== 0)) ? String.fromCharCode(90 - (65 - newCharCode) % 26 + 1) : String.fromCharCode(65)
          } else if (newCharCode > 90) {
            newArray[i] = (((newCharCode - 90) % 26 !== 0)) ? String.fromCharCode(65 + (newCharCode - 90) % 26 - 1) : String.fromCharCode(90)
          } else {
            newArray[i] = String.fromCharCode(newCharCode)
          }
        } else if (lowerCase) {
          let newCharCode = charCode + num
          if (newCharCode < 97) {
            
            newArray[i] = ((97- newCharCode) % 26 !== 0 ) ? String.fromCharCode(122 - (97 - newCharCode) % 26 + 1) : String.fromCharCode(97)
          } else if  (newCharCode > 122) {
            newArray[i] = (((newCharCode - 122) % 26 !== 0)) ? String.fromCharCode(97 + (newCharCode - 122) % 26 - 1) : String.fromCharCode(122)
          } else {
            newArray[i] = String.fromCharCode(newCharCode)
          }
        }
    }
    return newArray.join('')
  }

// Do not edit below this line
module.exports = caesar;
