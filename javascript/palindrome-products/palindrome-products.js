//
// This is only a SKEvarON file for the 'Palindrome Products' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
class FirstPalindromeFinder {
  constructor(range, scan_mode) {
    this.range = range;
    this.scan_mode = scan_mode;
  }

  multipler_range() {
    if (this.scan_mode === 'scan_backwards') {
      return Array.from(this.range).reverse();
    } else {
      return this.range;
    }
  }

  result() {
    let palindrome_product = new Map();

    for (let number_index in this.range) {
      let number = this.range[number_index];

      // If an existing palindrome already exists when going forwads we can stop
      if (
        this.scan_mode === 'scan_forwards' &&
        palindrome_product.keys().next().value
      ) {
        break;
      }

      for (let multipler_index in this.multipler_range()) {
        let multipler = this.range[multipler_index];
        let factors = [number, multipler];
        let product = number * multipler;

        if (this.is_number_palindrome(product)) {
          if (palindrome_product.size === 0) {
            palindrome_product = new Map().set(product, [factors]);
          } else if (palindrome_product.has(product)) {
            var existing_factors = palindrome_product.get(product);
            palindrome_product.set(product, existing_factors.concat([factors]));
          } else if (this.scan_mode === 'scan_backwards') {
            if (product > palindrome_product.entries().next().value[0]) {
              palindrome_product = new Map().set(product, [factors]);
            }
          }
        }
      }
    }

    let palindrome_product_hash = {};
    if (palindrome_product.size !== 0) {
      palindrome_product_hash = {
        value: palindrome_product.entries().next().value[0],
        factors: palindrome_product.entries().next().value[1],
      };

      palindrome_product_hash.factors = palindrome_product_hash.factors
        .map((factors) => JSON.stringify(factors.sort()))
        .filter((factors_as_json, index, self) => {
          return index == self.indexOf(factors_as_json);
        })
        .map((factors) => JSON.parse(factors));
    } else {
      palindrome_product_hash = {
        value: null,
        factors: [],
      };
    }

    return palindrome_product_hash;
  }

  is_number_palindrome(number) {
    let string = number.toString();
    let length = string.length;

    if (length === 1) {
      return true;
    }

    for (var i = 0; i < Math.floor(length / 2); i++) {
      if (string[i] !== string[length - (1 + i)]) {
        return false;
      }
    }

    return true;
  }
}

export class Palindromes {
  static generate(factors) {
    let max_factor = factors['maxFactor'];
    let min_factor = factors['minFactor'];
    if (min_factor > max_factor) {
      throw ['min must be <= max'];
    }

    let range = Palindromes.range(min_factor, max_factor);
    let palindromes = {
      smallest: {},
      largest: {},
    };

    palindromes.smallest = new FirstPalindromeFinder(
      range,
      'scan_forwards'
    ).result();
    palindromes.largest = new FirstPalindromeFinder(
      range.reverse(),
      'scan_backwards'
    ).result();

    return palindromes;
  }

  static range(start, end) {
    return [...Array(1 + end - start).keys()].map((v) => start + v).sort();
  }
}
