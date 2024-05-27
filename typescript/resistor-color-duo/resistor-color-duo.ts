const resistorMapping = {  
  'black': 0,
  'brown': 1,
  'red': 2,
  'orange': 3,
  'yellow': 4,
  'green': 5,
  'blue': 6,
  'violet': 7,
  'grey': 8,
  'white': 9
}

export function decodedValue(resistors: (keyof typeof resistorMapping)[]) {
  const firstTwoColours = resistors.slice(0, 2)
  const numbers = firstTwoColours.map((colour) => { return resistorMapping[colour] })
  return parseInt(numbers.join(""))
}
