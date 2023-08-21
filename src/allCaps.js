/**
 * Converts all the characters of a `string` to upper case 
 *
 * @since 1.0.0
 * @category String
 * @param {string} [string=''] The string to modify.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * allCaps('fred')
 * // => 'FRED'
 */

const allCaps = (string) => {
    return string.toUpperCase()
}

module.exports.allCaps = allCaps