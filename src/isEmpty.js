/**
 *  Returns true if the given string is empty or contains only whitespace. 
 *
 * @since 1.0.0
 * @category String
 * @param {string} [string=''] The string to evaluate.
 * @returns {string} Boolean
 * @example
 *
 * isEmpty("Abc def")
 * // => false
 */

const isEmpty = (string)  => {
    let trimmedString = string.trim();
    if (trimmedString === "") {
        return true;
    }
    for (let character of trimmedString) {
        if (character !== '\n' || '\r' || '\t') {
            return false;
        }
    }
    return true;
}

module.exports.isEmpty = isEmpty