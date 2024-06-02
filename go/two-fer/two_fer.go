// Package twofer implements a simple library that implements a sharing message
package twofer

// ShareWith takes a name and returns a sharing message
func ShareWith(name string) string {
	if name == "" {
		return "One for you, one for me."
	}

	return "One for " + name + ", one for me."
}
