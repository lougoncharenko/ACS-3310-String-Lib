/**
 * Removes extra space and replaces spaces with 
 * an underscore "_", and makes all characters lowercase.
 *
 * @since 1.0.0
 * @category String
 * @param {string} [string=''] The string to camelCase.
 * @returns {string} Returns the camelCased string.
 * @example
 *
 * camelCase( "Camel Case")
 * // => "camelCase"
 */

import {capitalizeWords} from './capitalizeWords.js';

 const camelCase = (string) => {
    const capitalizedString = capitalizeWords(string)
    const lowercasedFirstletter = capitalizedString[0].toLowerCase()
    const restOfLetters = capitalizedString.slice(1)
    const camelCased = lowercasedFirstletter + restOfLetters.replaceAll(' ', '')
    console.log(camelCased)

}

camelCase('Camel Case Words')