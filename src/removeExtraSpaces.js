/**
 * Removes all spaces from the beginning and end of a String along with any extra spaces in the middle. 
 * If more than one space appears in the middle of a string it is replaced by a single space.
 *
 * @since 1.0.0
 * @category String
 * @param {string} [string=''] The string to all.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * removeExtraSpaces("   Hello    world!   ")
 * // => "Hello world!"
 */

const removeExtraSpaces = (string) => {
    const newArray = string.split(' ')
    const result = newArray.filter(word => word.trim().length > 0);
    return result.join(' ')
}

module.exports.removeExtraSpaces = removeExtraSpaces