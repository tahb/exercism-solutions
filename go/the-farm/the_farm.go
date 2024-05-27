package thefarm

import "errors"
import "strconv"

type InvalidCowsError struct {
	numberOfCows       int
	customErrorMessage string
}

func (err InvalidCowsError) Error() string {
	return strconv.Itoa(err.numberOfCows) + " cows are invalid: " + err.customErrorMessage
}

func DivideFood(fodderCalculator FodderCalculator, numberOfCows int) (float64, error) {
	fodderAmount, errFodderAmount := fodderCalculator.FodderAmount(numberOfCows)
	fatteningFactor, errFatteningFactor := fodderCalculator.FatteningFactor()

	if errFodderAmount != nil {
		return 0, errFodderAmount
	}
	if errFatteningFactor != nil {
		return 0, errFatteningFactor
	}

	return fodderAmount * fatteningFactor / float64(numberOfCows), nil
}

func ValidateInputAndDivideFood(fodderCalculator FodderCalculator, numberOfCows int) (float64, error) {
	if numberOfCows <= 0 {
		return 0.0, errors.New("invalid number of cows")
	}

	return DivideFood(fodderCalculator, numberOfCows)
}

func ValidateNumberOfCows(numberOfCows int) error {
	if numberOfCows < 0 {
		return &InvalidCowsError{numberOfCows: numberOfCows, customErrorMessage: "there are no negative cows"}
	}
	if numberOfCows == 0 {
		return &InvalidCowsError{numberOfCows: numberOfCows, customErrorMessage: "no cows don't need food"}
	}

	return nil
}
