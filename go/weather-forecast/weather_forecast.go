// Package weather provides tools to interact with current conditions.
package weather

// CurrentCondition represents a string.
var CurrentCondition string

// CurrentLocation represents a string.
var CurrentLocation string

// Forecast returns a summary of the weather condition for a city.
func Forecast(city, condition string) string {
	CurrentLocation, CurrentCondition = city, condition
	return CurrentLocation + " - current weather condition: " + CurrentCondition
}
