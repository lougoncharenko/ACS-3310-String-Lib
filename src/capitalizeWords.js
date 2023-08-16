/**
 * Converts the first character of each word uppercase.
 *
 * @since 1.0.0
 * @category String
 * @param {string} [string=''] The string to all.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * capitalize('fred')
 * // => 'FRED'
 */

 const capitalize = (string) => {
    let capatilizedFirstLetter= string[0].toUpperCase()
    const trailingLettersAndWords = string.slice(1)
    const capitalizedWord = capatilizedFirstLetter + trailingLettersAndWords
    return capitalizedWord
}

 const capitalizeWords = (string) => {
    splitString= string.split(' ');
    let capatilizedWordsArray = []
    for (word in splitString){
        capatilizedWordsArray.push(capitalize(splitString[word]))
    }
    const capatilizedWords = capatilizedWordsArray.join().replaceAll(',', ' ');

    return capatilizedWords
 }

 const str = 'the quick brown fox jumps over the lazy dog.';
 console.log(capitalizeWords(str))