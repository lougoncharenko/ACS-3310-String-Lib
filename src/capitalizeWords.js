/**
 * Converts the first character of each word uppercase.
 *
 * @since 1.0.0
 * @category String
 * @param {string} [string=''] The string to modify.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * capitalizeWords('do all the things')
 * // => 'Do All The Things'
 */

 const {capitalize} = require ("./capitalize.js");

 const capitalizeWords = (string) => {
    const splitString= string.split(' ');
    let capatilizedWordsArray = []
    let word = 0
    for (word in splitString){
        capatilizedWordsArray.push(capitalize(splitString[word]))
    }
    const capatilizedWords = capatilizedWordsArray.join().replaceAll(',', ' ');
    return capatilizedWords
 }

module.exports.capitalizeWords = capitalizeWords