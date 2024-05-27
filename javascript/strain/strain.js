//
// This is only a SKELETON file for the 'Strain' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const keep = (input, callback) => {
  if (input.length === 0) return input

  const keptInput = input.filter((number) => callback(number))

  return keptInput
};

export const discard = (input, callback) => {
  if (input.length === 0) return input

  const discardedInput = input.filter((number) => !(callback(number)))

  return discardedInput
};
