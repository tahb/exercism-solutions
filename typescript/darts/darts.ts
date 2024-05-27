export function score(x: number, y: number): number {
  const distance = Math.sqrt(x ** 2 + y ** 2);
 
  const bigRadius = 10;
  const middleRadius = 5;
  const smallRadius = 1;

  if (distance <= smallRadius) {
    return 10
  }

  if (distance <= middleRadius) {
    return 5
  }
  
  if (distance <= bigRadius) {
    return 1
  }
  
  return 0
}
