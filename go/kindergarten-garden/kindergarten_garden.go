package kindergarten

import (
	"errors"
	"regexp"
	"sort"
	"strings"
)

type Garden struct {
	plants   [][]rune
	children []string
}

var plantLookup = map[rune]string{
	71: "grass",
	67: "clover",
	82: "radishes",
	86: "violets",
}

func NewGarden(diagram string, children []string) (*Garden, error) {
	err := validateDiagramSyntax(diagram)
	if err != nil {
		return nil, err
	}

	childrenErr := validateChildren(children)
	if childrenErr != nil {
		return nil, childrenErr
	}

	runesArray := formatDiagram(diagram)

	integrityErr := validateRowIntegrity(runesArray)
	if integrityErr != nil {
		return nil, integrityErr
	}

	return &Garden{plants: runesArray, children: children}, nil
}

func (g *Garden) Plants(child string) ([]string, bool) {
	childIndex, error := findChildsStartingPlaceOnTheWindow(g.children, child)
	if error != nil {
		return []string{}, false
	}

	plantNames := findPlantNamesAtLocation(childIndex, g.plants)

	return plantNames, true
}

func validateDiagramSyntax(diagram string) error {
	pattern := `^\n[A-Z]+[\n][A-Z]+$`
	re := regexp.MustCompile(pattern)
	if !re.MatchString(diagram) {
		return errors.New("invalid diagram")
	}

	return nil
}

func validateRowIntegrity(rows [][]rune) error {
	var lengthErr error = nil
	if len(rows[0]) != len(rows[1]) {
		lengthErr = errors.New("window row sizes aren't equal")
		return lengthErr
	}

	var oddRowsErr error = nil
	if len(rows[0])%2 != 0 {
		oddRowsErr = errors.New("window row sizes are odd")
		return oddRowsErr
	}

	return nil
}

func formatDiagram(diagram string) [][]rune {
	splitDiagram := strings.Split(diagram, "\n")

	var runesArray [][]rune
	for index, row := range splitDiagram {
		// Ignore the window row
		if index == 0 {
			continue
		}
		runes := []rune(row)
		runesArray = append(runesArray, runes)
	}

	return runesArray
}

func validateChildren(children []string) error {
	lookupMap := make(map[string]bool)
	for _, child := range children {
		if lookupMap[child] {
			return errors.New("duplicate child name")
		}
		lookupMap[child] = true
	}
	return nil
}

func findChildsStartingPlaceOnTheWindow(children []string, child string) (int, error) {
	var err error = nil
	childIndex := -1

	sortedSlice := make([]string, len(children))
	copy(sortedSlice, children)
	sort.Strings(sortedSlice)

	for i := 0; i < len(sortedSlice); i++ {
		if sortedSlice[i] == child {
			childIndex = i
		}
	}

	if childIndex == -1 {
		err = errors.New("child not found")
	}

	return childIndex, err
}

func findPlantNamesAtLocation(childIndex int, plants [][]rune) []string {
	firstPlantPosition := -1
	if childIndex == 0 {
		firstPlantPosition = 0
	} else {
		firstPlantPosition = childIndex * 2
	}

	secondPlantPosition := firstPlantPosition + 1

	result := []string{
		plantLookup[plants[0][firstPlantPosition]],
		plantLookup[plants[0][secondPlantPosition]],
		plantLookup[plants[1][firstPlantPosition]],
		plantLookup[plants[1][secondPlantPosition]],
	}

	return result
}
