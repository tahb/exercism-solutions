package lasagna

// import "fmt"
func Quantities(layers []string) (int, float64) {
	var noodles int
	var sauce float64

	for i := 0; i < len(layers); i++ {
		if layers[i] == "noodles" {
			noodles = noodles + 50
		}
		if layers[i] == "sauce" {
			sauce = sauce + 0.2
		}
	}
	return noodles, sauce
}

func AddSecretIngredient(friendsList []string, myList []string) {
	lastItemIndexFromFriendsList := len(friendsList) - 1
	lastItemIndexFromMyList := len(myList) - 1

	myList[lastItemIndexFromMyList] = friendsList[lastItemIndexFromFriendsList]
}

func ScaleRecipe(quantities []float64, desiredPortions int) []float64 {
	newQuantities := []float64{}

	for i := 0; i < len(quantities); i++ {
		var newQuantity float64 = (quantities[i] / float64(2)) * float64(desiredPortions)
		newQuantities = append(newQuantities, newQuantity)
	}

	return newQuantities
}

func PreparationTime(layers []string, averagePrepTime int) int {
	if averagePrepTime == 0 {
		averagePrepTime = 2
	}

	return averagePrepTime * len(layers)
}

// Your first steps could be to read through the tasks, and create
// these functions with their correct parameter lists and return types.
// The function body only needs to contain `panic("")`.
//
// This will make the tests compile, but they will fail.
// You can then implement the function logic one by one and see
// an increasing number of tests passing as you implement more
// functionality.
