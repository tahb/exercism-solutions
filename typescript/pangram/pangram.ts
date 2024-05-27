export function isPangram(phrase:string) {
  phrase = phrase.toLowerCase();
  return [..."abcdefghijklmnopqrstuvwxyz"].every((c) => phrase.includes(c))
}

