export default class Building {
  constructor(sqft) {
    if (new.target !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
    this.sqft = sqft;
  }

  set sqft(n) {
    if (typeof n !== 'number') {
      throw TypeError('sqft must be a number');
    }
    this._sqft = n;
  }

  get sqft() {
    return this._sqft;
  }
}
