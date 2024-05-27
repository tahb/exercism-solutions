const Resistors = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9
}

export function decodedResistorValue(resisters: string[]) {
  const firstColorCode = getColorCode(resisters[0])
  const secondColorCode = getColorCode(resisters[1])
  const thirdColorCode = getColorCode(resisters[2])

  var result:string
  var ohms:number[] = [firstColorCode, secondColorCode]
  
  for (let index = 0; index < thirdColorCode; index++) { ohms.push(0) }

  if (ohms.length >= 4) {
    result = `${ohms.slice(0, -3).join('')} kiloohms`
  } else {
    result = `${ohms.join('')} ohms`
  }
  
  return result
}

function getColorCode(color: string) {
  return (Resistors as {[index: string]: number})[color];
}
