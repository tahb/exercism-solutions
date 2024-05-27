export function toRna(dnaSequence:string):string {
  var result:string[] = []
    
  for (let strand of dnaSequence) {
    result.push(findStrand(strand))
  }

  return result.join('')
}

function findStrand(dnaStrand:string):string {
  const match = (Strands as {[index: string]: string})[dnaStrand]
  
  if (match === undefined) {
    throw Error("Invalid input DNA.");
  } 
  
  return match
}

const Strands = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U'
}
