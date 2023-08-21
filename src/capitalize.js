/**
 * Converts the first character of `string` to upper case 
 *
 * @since 1.0.0
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * capitalize('fred')
 * // => 'Fred'
 */

const capitalize = (string) => {
    let capatilizedFirstLetter= string[0].toUpperCase()
    const trailingLettersAndWords = string.slice(1)
    const capitalizedWord = capatilizedFirstLetter + trailingLettersAndWords
    return capitalizedWord
}

module.exports.capitalize = capitalize