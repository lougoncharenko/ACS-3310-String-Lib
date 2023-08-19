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

import {removeExtraSpaces}  from "./removeExtraSpaces.js";

 const kebabCase = (string) => {
    const lowerCaseStringWIthoutSpaces = removeExtraSpaces(string).toLowerCase();
    const kebabString= lowerCaseStringWIthoutSpaces.replaceAll(' ', '-')
    console.log(kebabString)
}

const testKebabCase = () => {
   const string = "   Hello    world   again";
   kebabCase(string);
 
}

export {kebabCase}