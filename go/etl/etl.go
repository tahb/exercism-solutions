package etl

import "strings"

func Transform(in map[int][]string) map[string]int {
	result := map[string]int{}

	for points, value := range in {
		for _, character := range value {
			result[strings.ToLower(character)] = points
		}
	}

	return result
}
