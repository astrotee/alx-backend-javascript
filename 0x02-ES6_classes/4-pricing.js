import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  set amount(n) {
    if (typeof n !== 'number') {
      throw TypeError('Amount must be a number');
    }
    this._amount = n;
  }

  get amount() {
    return this._amount;
  }

  set currency(c) {
    if (!(c instanceof Currency)) {
      throw TypeError('currency must be an instance of Currency');
    }
    this._currency = c;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
