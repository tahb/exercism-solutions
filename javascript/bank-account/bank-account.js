//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  #open = false;
  #balance = 0;

  constructor(openingBalance) {
    this.#balance = openingBalance ?? 0;
  }

  open() {
    this.#errorIfAccountOpen();

    this.#open = true;
    this.#balance = 0;
  }

  close() {
    this.#errorIfAccountClosed();

    this.#open = false;
  }

  deposit(amount) {
    this.#errorIfAmountInvalid(amount);
    this.#errorIfAccountClosed();

    this.#balance += amount;
  }

  withdraw(amount) {
    this.#errorIfAmountInvalid(amount);
    this.#errorIfAmountExceedsBalance(amount);
    this.#errorIfAccountClosed();

    this.#balance -= amount;
  }

  get balance() {
    this.#errorIfAccountClosed();

    return this.#balance;
  }

  #errorIfAccountOpen() {
    if (this.#open) {
      throw new ValueError();
    }
  }

  #errorIfAccountClosed() {
    if (!this.#open) {
      throw new ValueError();
    }
  }

  #errorIfAmountInvalid(amount) {
    if (amount < 0) {
      throw new ValueError();
    }
  }

  #errorIfAmountExceedsBalance(amount) {
    if (amount > this.#balance) {
      throw new ValueError();
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
