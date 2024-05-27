export function find(haystack: number[], needle: number): number | undefined {
  const sortedHaystack = haystack.sort((a, b) => a - b);
  
  const result = sortThroughTheHaystack(sortedHaystack, needle, 0, sortedHaystack.length-1)
  
  return result
}

function sortThroughTheHaystack(haystack: number[], needle: number, startIndex: number, endIndex: number): number | undefined {
  
  const midpoint = Math.floor((startIndex + endIndex) / 2);

  if (startIndex > endIndex) {
    throw new Error('Value not in array');
  }
  
  if (haystack[midpoint] === needle) {
    return midpoint
  }
  
  if (haystack[midpoint] > needle) { 
    return sortThroughTheHaystack(haystack, needle, startIndex, midpoint-1)
  }

  if (haystack[midpoint] < needle) {
    return sortThroughTheHaystack(haystack, needle, midpoint+1, endIndex)
  }
}
