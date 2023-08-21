/**
 *  this method will take the first character of a string and move to the end of a string
 *
 * @since 1.0.0
 * @category String
 * @param {string} [string=''] The string to modify.
 * @returns {string} Returns the shifted string.
 * @example
 *
 * shift("Hello World")
 * // => "ello WorldH"
 */

const shift = (string) => {
    const firstLetter = string[0];
    const traceLetters = string.slice(1);
    const shiftedSentence = traceLetters + firstLetter
    return shiftedSentence
}


module.exports.shift = shift
