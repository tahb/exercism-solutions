//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna_strands) => {
  var result = []
  for (var dna_strand of dna_strands) {
    result.push(convert_dna_to_rna_strand(dna_strand))
  }
  return result.join("")
};

const convert_dna_to_rna_strand = (dna_strand) => {
  return STRAND_CONVERSIONS.get(dna_strand)
}

const STRAND_CONVERSIONS = new Map([
  ["G", "C"],
  ["C", "G"],
  ["T", "A"],
  ["A", "U"],
])
