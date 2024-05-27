// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  return birdsPerDay.reduce((previous, next) => { return previous + next })
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let weeklyViews = []
  for (let i = 0; i < birdsPerDay.length; i++) {
    weeklyViews.push(birdsPerDay.splice(0, 7))
  }
  
  return totalBirdCount(weeklyViews[week-1])
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  let skipNext = false 
  
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (!skipNext) {
      birdsPerDay[i] = birdsPerDay[i] + 1;
      skipNext = true
    } else {
      skipNext = false
    } 
  }

  return birdsPerDay
}
