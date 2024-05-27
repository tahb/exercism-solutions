/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 
 * }
 */

export function cookingStatus(timer) {
  if (timer === undefined) {
    return 'You forgot to set the timer.'
  }

  if (timer === 0) {
    return 'Lasagna is done.'
  }

  return 'Not done, please wait.'
}

export function preparationTime(layers, timer = 2) {
  return timer * layers.length
}

export function quantities(layers) {
  let sauce = 0
  let noodles = 0
  
  for (let layer of layers) {
    if (layer === "noodles") {
      noodles += 50
    }
    if (layer === "sauce") {
      sauce += 0.2
    }
  }
  
  return {noodles: noodles, sauce: sauce}
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length-1])
}

export function scaleRecipe(recipe, portions) {
  let newRecipe = {}
  for (let ingredient of Object.keys(recipe)) {
    newRecipe[ingredient] = (recipe[ingredient] / 2) * portions
  }
  return newRecipe
}