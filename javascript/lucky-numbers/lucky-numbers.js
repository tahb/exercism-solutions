// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  return Number(String(array1.join(''))) + Number(String(array2.join('')))
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let answer = false
  const array = String(value).split("")
  
  for(let i = 0; i < array.length; i++) {
    let match = false
    match = array[i] === array[array.length - (i + 1)]
    if(match === false) {
      return false 
    }
  }
  return true
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (!Boolean(input)) {
    return "Required field"
  } 

  if (isNaN(Number(input)) || Number(input) === 0) {
    return "Must be a number besides 0"
  } 
  
  return ""
}
