const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function () {
  it('should return the sum of two integers', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('should return the sum of two floats', function () {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
  it('should return the sum of two integers when one is negative', function () {
    assert.strictEqual(calculateNumber(-1, 3), 2);
  });
  it('should return the sum of two floats when one is negative', function () {
    assert.strictEqual(calculateNumber(-1.5, 3.7), 3);
  });
  it('should return the sum of two integers when both are negative', function () {
    assert.strictEqual(calculateNumber(-1, -3), -4);
  });
  it('should return the sum of two floats when both are negative', function () {
    assert.strictEqual(calculateNumber(-1.5, -3.7), -5);
  });
  it('should return the sum of two integers when one is zero', function () {
    assert.strictEqual(calculateNumber(0, 3), 3);
  });
  it('should return the sum of two floats when one is zero', function () {
    assert.strictEqual(calculateNumber(0, 3.7), 4);
  });
  it('should return the sum of two floats when both are zero', function () {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });
  it('should return the sum of two whole numbers', function () {
    assert.strictEqual(calculateNumber(1.0, 3.0), 4);
  });
  it('should return the sum of two whole numbers when one is negative', function () {
    assert.strictEqual(calculateNumber(-1.0, 3.0), 2);
  });
  it('should return the sum of two whole numbers when both are negative', function () {
    assert.strictEqual(calculateNumber(-1.0, -3.0), -4);
  });
  it('should return the sum of two whole numbers when one is zero', function () {
    assert.strictEqual(calculateNumber(0.0, 3.0), 3);
  });
  it('should return the sum of two whole numbers when both are zero', function () {
    assert.strictEqual(calculateNumber(0.0, 0.0), 0);
  });
  it('should return the sum of two whole numbers when both are the same', function () {
    assert.strictEqual(calculateNumber(3.0, 3.0), 6);
  });
  it('should return the sum of two whole numbers when both are the same and negative', function () {
    assert.strictEqual(calculateNumber(-3.0, -3.0), -6);
  });
  it('should round float a', function () {
    assert.strictEqual(calculateNumber(1.4, 3), 4);
  });
  it('should round float b', function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
});

