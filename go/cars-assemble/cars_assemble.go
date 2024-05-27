package cars

// CalculateWorkingCarsPerHour calculates how many working cars are
// produced by the assembly line every hour.
func CalculateWorkingCarsPerHour(productionRate int, successRate float64) float64 {
	return float64(productionRate) * (successRate / 100)
}

// CalculateWorkingCarsPerMinute calculates how many working cars are
// produced by the assembly line every minute.
func CalculateWorkingCarsPerMinute(productionRate int, successRate float64) int {
	var ratePerHour = CalculateWorkingCarsPerHour(productionRate, successRate)
	return int(ratePerHour / 60)
}

// CalculateCost works out the cost of producing the given number of cars.
func CalculateCost(carsCount int) uint {
	var discountCarGroups = carsCount / 10
	var fullPriceCards = carsCount % 10
	return uint((discountCarGroups * 95000) + (fullPriceCards * 10000))
}
