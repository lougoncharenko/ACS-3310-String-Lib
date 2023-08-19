/**
 * Converts all the characters of a `string` to upper case 
 *
 * @since 1.0.0
 * @category String
 * @param {string} [string=''] The string to all.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * allCaps('fred')
 * // => 'FRED'
 */

const allCaps = (string) => {
    return string.toUpperCase()
}

const testAllCaps = () => {
    const str = 'the quick brown fox jumps over the lazy dog.';
    const phrase = 'hello world'
    console.log(allCaps(phrase))
    console.log(allCaps(str)) 
}
// testAllCaps()


export {allCaps}