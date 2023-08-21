/**
 *  this method will take the first character of a string and move to the end of a string
 *
 * @since 1.0.0
 * @category String
 * @param {string} [string=''] The string to modify.
 * @returns {string} Returns the hashed array.
 * @example
 *
 * makeHashTag("Amazing bongo drums for sale")
 * // => ['#amazing', '#bongo', '#drums']
 */

 const makeHashTag = (string) => {
    const stringsArray = string.split(' ')
    const descendingArray = stringsArray.sort((a, b) => b.length - a.length);
    const arrayOfThree = descendingArray.slice(0,3)

    arrayOfThree.forEach(function(item, i) {
        arrayOfThree[i] = `#${item}`
      })
   return arrayOfThree
}

module.exports.makeHashTag = makeHashTag