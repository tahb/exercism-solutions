//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, age_in_seconds) => {
  var earth_years = 365.25 * planet_multipler(planet)
  var seconds_per_year = 60 * 60 * 24 * earth_years

  var result = Number((age_in_seconds / seconds_per_year).toFixed(2))

  return result
};

const planet_multipler = (planet) => {
  return PLANETS_IN_EARTH_YEARS.get(planet)
}

const PLANETS_IN_EARTH_YEARS = new Map([
  ["mercury", 0.2408467],
  ["venus", 0.61519726],
  ["earth", 1.0],
  ["mars", 1.8808158],
  ["jupiter", 11.862615],
  ["saturn", 29.447498],
  ["uranus", 84.016846],
  ["neptune", 164.79132]
])
