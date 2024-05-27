//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (letters) => {
  if (letters == "") {
    return false
  }

  var prepared_lettters = letters.toLowerCase()
                                 .replace(/[^A-z]/g, "")
                                 .split("")
                                 .sort()


  var unique_letters = ALPHABET.filter(letter => prepared_lettters.includes(letter))

  return unique_letters.length == ALPHABET.length
};

const ALPHABET = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
