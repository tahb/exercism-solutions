package blackjack

// ParseCard returns the integer value of a card following blackjack ruleset.
func ParseCard(card string) int {
	switch {
	case card == "ten" || card == "jack" || card == "queen" || card == "king":
		return 10
	case card == "ace":
		return 11
	case card == "two":
		return 2
	case card == "three":
		return 3
	case card == "four":
		return 4
	case card == "five":
		return 5
	case card == "six":
		return 6
	case card == "seven":
		return 7
	case card == "eight":
		return 8
	case card == "nine":
		return 9
	default:
		return 0
	}
}

// FirstTurn returns the decision for the first turn, given two cards of the
// player and one card of the dealer.
func FirstTurn(card1, card2, dealerCard string) string {
	var cardNumber2 int = ParseCard(card2)
	var cardNumber1 int = ParseCard(card1)
	var dealerCardNumber int = ParseCard(dealerCard)
	var cardSum int = cardNumber1 + cardNumber2

	switch {
	case cardNumber1 == 11 && cardNumber2 == 11:
		return "P"
	case cardSum == 21 && dealerCardNumber != 11 && dealerCardNumber != 10:
		return "W"
	case cardSum == 21:
		return "S"
	case cardSum >= 17 && cardSum <= 20:
		return "S"
	case cardSum >= 12 && cardSum <= 16 && dealerCardNumber >= 7:
		return "H"
	case cardSum >= 12 && cardSum <= 16:
		return "S"
	case cardSum <= 11:
		return "H"
	default:
		return "S"
	}

}
