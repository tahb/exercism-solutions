package secret

func Handshake(code uint) []string {
	results := []string{}

	if code&1 == 1 {
		results = append(results, "wink")
	}
	if code&2 == 2 {
		results = append(results, "double blink")
	}
	if code&4 == 4 {
		results = append(results, "close your eyes")
	}
	if code&8 == 8 {
		results = append(results, "jump")
	}
	if code&16 == 16 {
		for index, oppositeIndex := 0, len(results)-1; index < oppositeIndex; index, oppositeIndex = index+1, oppositeIndex-1 {
			results[index], results[oppositeIndex] = results[oppositeIndex], results[index]
		}
	}

	return results
}
