/**
 * Removes extra spaces and replaces spaces with the 
 * hyphen "-", and makes all characters lowercase.
 *
 * @since 1.0.0
 * @category String
 * @param {string} [string=''] The string to kebabCase.
 * @returns {string} Returns the kebabCased string.
 * @example
 *
 * kebabCase("   Hello    world   ")
 * // => ""hello-world""
 */

 const { removeExtraSpaces } = require("./removeExtraSpaces.js");

 const kebabCase = (string) => {
    const lowerCaseStringWIthoutSpaces = removeExtraSpaces(string).toLowerCase();
    const kebabString= lowerCaseStringWIthoutSpaces.replaceAll(' ', '-')
    return kebabString
}

module.exports.kebabCase = kebabCase