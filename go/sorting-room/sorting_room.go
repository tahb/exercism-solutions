package sorting

import "strconv"
import "fmt"

func DescribeNumber(f float64) string {
	return fmt.Sprintf("This is the number %.1f", f)
}

type NumberBox interface {
	Number() int
}

func DescribeNumberBox(nb NumberBox) string {
	numberAsString := fmt.Sprintf("%.1f", float64(nb.Number()))
	return "This is a box containing the number " + numberAsString
}

type FancyNumber struct {
	n string
}

func (i FancyNumber) Value() string {
	return i.n
}

type FancyNumberBox interface {
	Value() string
}

func ExtractFancyNumber(fnb FancyNumberBox) int {
	switch fnb.(type) {
	case FancyNumber:
		i, _ := strconv.Atoi(fnb.Value())
		return i
	default:
		return 0
	}
}

func DescribeFancyNumberBox(fnb FancyNumberBox) string {
	number := 0.0

	switch fnb.(type) {
	case FancyNumber:
		i, _ := strconv.ParseFloat(fnb.Value(), 64)
		number = i
	default:
		number = 0.0
	}

	return "This is a fancy box containing the number " + fmt.Sprintf("%.1f", number)
}

func DescribeAnything(i interface{}) string {
	var descriptionOfNumber string

	switch v := i.(type) {
	case int:
		descriptionOfNumber = DescribeNumber(float64(v))
	case float64:
		descriptionOfNumber = DescribeNumber(v)
	case NumberBox:
		descriptionOfNumber = DescribeNumberBox(v)
	case FancyNumberBox:
		descriptionOfNumber = DescribeFancyNumberBox(v)
	default:
		return "Return to sender"
	}

	return descriptionOfNumber
}
