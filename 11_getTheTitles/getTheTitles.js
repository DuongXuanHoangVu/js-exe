const getTheTitles = function(array) {
    const titlesBook = []
        for (const value of array) {
            titlesBook.push(value.title)
        }
    return titlesBook
};

// Do not edit below this line
module.exports = getTheTitles;
