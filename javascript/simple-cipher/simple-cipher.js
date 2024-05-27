//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

export class Cipher {
  constructor(key) {
    this.key = key;
  }

  encode(plain_text) {
    if (!this.key) this.key = plain_text;

    const plain_characters = plain_text.split('');

    const encoded_result = this.shift('forward', plain_characters);

    return encoded_result;
  }

  decode(encrypted_text) {
    const encrypted_characters = encrypted_text.split('');

    const decoded_result = this.shift('backward', encrypted_characters);

    return decoded_result;
  }

  get key() {
    return this._key;
  }

  set key(value) {
    this._key = value;
  }

  secret_keys() {
    return this.key.split('');
  }

  matching_secret_key(character_index) {
    const key_length = this.secret_keys().length;

    // The key may be shorter than the value
    const key_index_to_use = character_index % key_length;

    return this.secret_keys()[key_index_to_use];
  }

  shift(direction, characters) {
    let result = '';

    characters.forEach((character, character_index) => {
      const position_in_alphabet = alphabet.indexOf(character);
      const matching_secret_key = this.matching_secret_key(character_index);
      const number_to_shift_by = alphabet.indexOf(matching_secret_key);

      // If the shift key is 0, return the original value
      if (number_to_shift_by === 0) return (result += character);

      // Shift the character forward by the value of the key
      if (direction === 'forward') {
        const new_character_index =
          (position_in_alphabet + number_to_shift_by) % alphabet.length;
        result += alphabet[new_character_index];
      }

      // Shift the character backwards by the value of the key
      if (direction === 'backward') {
        const new_character_index =
          (position_in_alphabet - number_to_shift_by) % alphabet.length;
        if (new_character_index < 0) {
          result += alphabet[alphabet.length - Math.abs(new_character_index)];
        } else {
          result += alphabet[new_character_index];
        }
      }
    });

    return result;
  }
}
