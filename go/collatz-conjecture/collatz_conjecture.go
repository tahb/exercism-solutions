package collatzconjecture

import "fmt"

func CollatzConjecture(n int) (int, error) {
	if n <= 0 {
		return 0, fmt.Errorf("invalid input: %d", n)
	}

	count := 0

	for n != 1 {
		count++

		if n%2 == 0 {
			n = n/2
		} else {
			n = 3*n + 1
		}
	}

	return count, nil
}
