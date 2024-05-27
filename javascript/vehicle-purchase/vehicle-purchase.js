// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines whether or not you need a licence to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
  const licensedVehicles = ["car", "truck"]
  return licensedVehicles.includes(kind)
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
  let preference = (option1 < option2) ? option1 : option2

  return preference + " is clearly the better choice."
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
  let reductionPercentage = 0.0
  
  if (age < 3) {
    reductionPercentage = 0.20
  } else if (age > 10) {
    reductionPercentage = 0.50
  } else {
    reductionPercentage = 0.30
  }

  const reductionAmount = originalPrice * reductionPercentage
  return originalPrice - reductionAmount
}
