export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  set size(size) {
    if (typeof size !== 'number') {
      throw new TypeError('size must be a number');
    }
    this._size = size;
  }

  get size() {
    return this._size;
  }

  set location(location) {
    if (typeof location !== 'string') {
      throw new TypeError('location must be a string');
    }
    this._location = location;
  }

  get location() {
    return this._location;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'string') {
      return this.location;
    }
    return this.size;
  }
}
