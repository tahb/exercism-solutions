//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (colorCombinations) => {
  var first_answer = colorFinder(colorCombinations[0])
  var second_answer = colorFinder(colorCombinations[1])

  return parseInt([first_answer, second_answer].join(""))
};

const colorFinder = (color_name) => {
  return COLORS.findIndex(x => x === color_name)
}

export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];
