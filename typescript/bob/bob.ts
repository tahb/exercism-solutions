

export function hey(message: string): string {
  message = message.trim()
  
  const shouting = isShouting(message)
  const silence = isSilent(message)
  const question = isQuestion(message)
  const noLetters = isWithoutLetters(message)
  
  if (question === true && noLetters === true) {
    return "Sure."
  }
  
  if (silence === true) {
    return "Fine. Be that way!"
  }
  
  if (noLetters === true) {
    return "Whatever."
  }
  
  if (question === true && shouting === true) {
    return "Calm down, I know what I'm doing!"  
  }
  
  if (question === true) {
    return "Sure."
  }

  if (isShouting(message) === true) {
    return "Whoa, chill out!"
  }

  return "Whatever."
}

function isShouting(message: string) {
  return message === message.toUpperCase()
}

function isSilent(message: string) {
  return message.replaceAll('\t', '').split(' ').join('').length === 0
}

function isQuestion(message: string) {
  return message.substring(message.length - 1) === "?"
}

function isWithoutLetters(message: string) {
  return /^[0-9|,| |?]+$/.test(message) === true
}