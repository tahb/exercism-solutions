package gross

// Units stores the Gross Store unit measurements.
func Units() map[string]int {
	return map[string]int{
		"quarter_of_a_dozen": 3,
		"half_of_a_dozen":    6,
		"dozen":              12,
		"small_gross":        120,
		"gross":              144,
		"great_gross":        1728,
	}
}

// NewBill creates a new bill.
func NewBill() map[string]int {
	return map[string]int{}
}

// AddItem adds an item to customer bill.
func AddItem(bill, units map[string]int, item, unit string) bool {
	value, exists := units[unit]
	if exists == false {
		return false
	}

	bill[item] = bill[item] + value
	return true
}

// RemoveItem removes an item from customer bill.
func RemoveItem(bill, units map[string]int, item, unit string) bool {
	billItemQuantity, billItemExists := bill[item]
	if billItemExists == false {
		return false
	}

	unitQuantity, unitItemExists := units[unit]
	if unitItemExists == false {
		return false
	}

	newItemQuantity := billItemQuantity - unitQuantity

	switch {
	case newItemQuantity == 0:
		delete(bill, item)
		return true
	case newItemQuantity < 0:
		return false
	default:
		bill[item] = newItemQuantity
		return true
	}
}

// GetItem returns the quantity of an item that the customer has in his/her bill.
func GetItem(bill map[string]int, item string) (int, bool) {
	billItemQuantity, billItemExists := bill[item]
	if billItemExists == false {
		return 0, false
	} else {
		return billItemQuantity, true
	}
}
