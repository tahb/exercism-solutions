package parsinglogfiles

import "regexp"

func IsValidLine(text string) bool {
	re, err := regexp.Compile(`^\[(TRC|DBG|INF|WRN|ERR|FTL)\]`)

	if err != nil {
		return false
	}

	return re.MatchString(text)
}

func SplitLogLine(text string) []string {
	re := regexp.MustCompile(`<[~*=\\-]*>`)

	return re.Split(text, -1)
}

func CountQuotedPasswords(lines []string) int {
	counter := 0
	re := regexp.MustCompile(`"(?i).*password.*"`)

	for _, line := range lines {
		if re.MatchString(line) {
			counter++
		}
	}

	return counter
}

func RemoveEndOfLineText(text string) string {
	re := regexp.MustCompile(`end-of-line\d+`)
	return re.ReplaceAllString(text, "")
}

func TagWithUserName(lines []string) []string {
	re := regexp.MustCompile(`User\b\s*(\w+)`)
	for index, line := range lines {
		match := re.FindStringSubmatch(line)

		if len(match) > 1 {
			lines[index] = "[USR] " + match[1] + " " + line
		}
	}
	return lines
}
