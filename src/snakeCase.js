/**
 * Removes extra space and replaces spaces with 
 * an underscore "_", and makes all characters lowercase.
 *
 * @since 1.0.0
 * @category String
 * @param {string} [string=''] The string to snakeCase.
 * @returns {string} Returns the snakeCased string.
 * @example
 *
 * snakeCase( "  what the    heck   ")
 * // => "what_the_heck"
 */

 const { removeExtraSpaces } = require("./removeExtraSpaces.js");

const snakeCase = (string) => {
    const lowerCaseStringWIthoutSpaces = removeExtraSpaces(string).toLowerCase();
    const snakeCaseString = lowerCaseStringWIthoutSpaces.replaceAll(' ', '_')
    return snakeCaseString
}

module.exports.snakeCase = snakeCase