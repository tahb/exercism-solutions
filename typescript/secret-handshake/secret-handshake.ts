export function commands(secret:number) {
  let reverseActions = false
  const binary = secret.toString(2)
  const numbers = binary.padStart(5, "0").split('')
  const result: string[] = []
  const actions: string[] = [
    'undefined',
    'jump',
    'close your eyes',
    'double blink',
    'wink',
  ]
  
  for (let index = 0; index < numbers.length; index++) {
    if (index === 0 && numbers[0] === '1') {
      reverseActions = true
      continue
    }
    
    if (numbers[index] === '1') { 
      result.push(actions[index])
    }
  }

  if (reverseActions === true) {
    return result
  } else {
    return result.reverse()
  }
}
