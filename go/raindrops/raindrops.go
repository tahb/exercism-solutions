package raindrops

import (
	"strconv"
	"strings"
)

func Convert(number int) string {
	results := []string{}

	if number%3 == 0 {
		results = append(results, "Pling")
	}

	if number%5 == 0 {
		results = append(results, "Plang")
	}

	if number%7 == 0 {
		results = append(results, "Plong")
	}

	if len(results) == 0 {
		return strconv.Itoa(number)
	}

	return strings.Join(results, "")
}
