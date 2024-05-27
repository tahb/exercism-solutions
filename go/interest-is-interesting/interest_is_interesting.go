package interest

// InterestRate returns the interest rate for the provided balance.
func InterestRate(balance float64) float32 {
	interestRate := 3.213
	lowerBracket := float64(1000)
	upperBracket := float64(5000)

	switch {
	case balance >= 0 && balance < lowerBracket:
		interestRate = 0.5
	case balance >= upperBracket:
		interestRate = 2.475
	case balance >= lowerBracket && balance < upperBracket:
		interestRate = 1.621
	}

	return float32(interestRate)
}

// Interest calculates the interest for the provided balance.
func Interest(balance float64) float64 {
	interest := balance * float64(InterestRate(balance)) / 100
	return float64(interest)
}

// AnnualBalanceUpdate calculates the annual balance update, taking into account the interest rate.
func AnnualBalanceUpdate(balance float64) float64 {
	return balance + Interest(balance)
}

// YearsBeforeDesiredBalance calculates the minimum number of years required to reach the desired balance.
func YearsBeforeDesiredBalance(balance, targetBalance float64) int {
	yearCount := 0
	for balance < targetBalance {
		balance = AnnualBalanceUpdate(balance)
		yearCount++
	}
	return yearCount
}
