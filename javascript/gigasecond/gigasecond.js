//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const GIGASECOND = 1_000_000_000;
const GIGASECOND_IN_MILLISECONDS = GIGASECOND * 1000;

export const gigasecond = (original_date) => {
  let date = new Date(original_date);
  let milliseconds = date.getTime();

  return new Date(milliseconds + GIGASECOND_IN_MILLISECONDS);
};
