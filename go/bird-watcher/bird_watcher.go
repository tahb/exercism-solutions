package birdwatcher

// TotalBirdCount return the total bird count by summing
// the individual day's counts.
func TotalBirdCount(birdsPerDay []int) int {
	var count = 0
	for i := 0; i < len(birdsPerDay); i++ {
		count += birdsPerDay[i]
	}
	return count
}

// BirdsInWeek returns the total bird count by summing
// only the items belonging to the given week.
func BirdsInWeek(birdsPerDay []int, week int) int {
	start := 7 * (week - 1)
	end := start + 7

	var count = 0
	for i := start; i < end; i++ {
		count += birdsPerDay[i]
	}
	return count
}

// FixBirdCountLog returns the bird counts after correcting
// the bird counts for alternate days.
func FixBirdCountLog(birdsPerDay []int) []int {
	for i := 0; i < len(birdsPerDay); i++ {
		if i%2 == 0 {
			birdsPerDay[i] = birdsPerDay[i] + 1
		}
	}
	return birdsPerDay
}
