//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class MessageResponder {
  constructor(string) {
    this.string = string;
  }

  response() {
    if (this.shouting() && this.questioning())
      return "Calm down, I know what I'm doing!";
    if (this.shouting()) return 'Whoa, chill out!';
    if (this.questioning()) return 'Sure.';
    if (this.forceful()) return 'Whatever.';
    if (this.questioning() && !this.talking_with_letters()) return 'Sure.';
    if (this.shouting() && this.talking_with_special_characters())
      return 'Whoa, chill out!';
    if (this.shouting() && !this.forceful()) return 'Whoa, chill out!';
    if (!this.talking_with_letters() && this.questioning()) return 'Sure.';
    if (this.silence()) return 'Fine. Be that way!';

    return 'Whatever.';
  }

  talking_with_letters() {
    return this.string.match(/[a-zA-Z]+/);
  }

  talking_with_special_characters() {
    return this.string.match(/[^a-z0-9 A-Z]+/);
  }

  shouting() {
    return this.talking_with_letters() &&
      this.string.toUpperCase() === this.string
      ? true
      : false;
  }

  questioning() {
    let trimmed_string = this.string.trim();
    return trimmed_string.charAt(trimmed_string.length - 1) == '?'
      ? true
      : false;
  }

  forceful() {
    return this.string.includes('!') ? true : false;
  }

  silence() {
    return this.string == '' || this.string.match(/^( |\t|\n|\r)*$/)
      ? true
      : false;
  }
}

export const hey = (string) => {
  let message_responder = new MessageResponder(string);
  return message_responder.response();
};
