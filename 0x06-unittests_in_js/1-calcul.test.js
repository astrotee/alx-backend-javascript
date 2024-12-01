const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function () {
  it('should return the sum of two integers', function () {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
  });
  it('should return the sum of two floats', function () {
    assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
  });
  it('should return the sum of two integers when one is negative', function () {
    assert.strictEqual(calculateNumber('SUM', -1, 3), 2);
  });
  it('should return the sum of two floats when one is negative', function () {
    assert.strictEqual(calculateNumber('SUM', -1.5, 3.7), 3);
  });
  it('should return the sum of two integers when both are negative', function () {
    assert.strictEqual(calculateNumber('SUM', -1, -3), -4);
  });
  it('should return the sum of two floats when both are negative', function () {
    assert.strictEqual(calculateNumber('SUM', -1.5, -3.7), -5);
  });
  it('should return the sum of two integers when one is zero', function () {
    assert.strictEqual(calculateNumber('SUM', 0, 3), 3);
  });
  it('should return the sum of two floats when one is zero', function () {
    assert.strictEqual(calculateNumber('SUM', 0, 3.7), 4);
  });
  it('should return the sum of two floats when both are zero', function () {
    assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
  });
  it('should return the sum of two whole numbers', function () {
    assert.strictEqual(calculateNumber('SUM', 1.0, 3.0), 4);
  });
  it('should return the sum of two whole numbers when one is negative', function () {
    assert.strictEqual(calculateNumber('SUM', -1.0, 3.0), 2);
  });
  it('should return the sum of two whole numbers when both are negative', function () {
    assert.strictEqual(calculateNumber('SUM', -1.0, -3.0), -4);
  });
  it('should return the sum of two whole numbers when one is zero', function () {
    assert.strictEqual(calculateNumber('SUM', 0.0, 3.0), 3);
  });
  it('should return the sum of two whole numbers when both are zero', function () {
    assert.strictEqual(calculateNumber('SUM', 0.0, 0.0), 0);
  });
  it('should return the sum of two whole numbers when both are the same', function () {
    assert.strictEqual(calculateNumber('SUM', 3.0, 3.0), 6);
  });
  it('should return the sum of two whole numbers when both are the same and negative', function () {
    assert.strictEqual(calculateNumber('SUM', -3.0, -3.0), -6);
  });
  it('should round float a', function () {
    assert.strictEqual(calculateNumber('SUM', 1.4, 3), 4);
  });
  it('should round float b', function () {
    assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
  });
  it('should subtract two integers', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
  });
  it('should subtract two floats', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
  });
  it('should subtract two integers when one is negative', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', -1, 3), -4);
  });
  it('should subtract two floats when one is negative', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', -1.5, 3.7), -5);
  });
  it('should subtract two integers when both are negative', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', -1, -3), 2);
  });
  it('should subtract two floats when both are negative', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', -1.5, -3.7), 3);
  });
  it('should subtract two integers when one is zero', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 0, 3), -3);
  });
  it('should subtract two floats when one is zero', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 0, 3.7), -4);
  });
  it('should subtract two floats when both are zero', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
  });
  it('should subtract two whole numbers', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.0, 3.0), -2);
  });
  it('should subtract two whole numbers when one is negative', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', -1.0, 3.0), -4);
  });
  it('should subtract two whole numbers when both are negative', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', -1.0, -3.0), 2);
  });
  it('should subtract two whole numbers when one is zero', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 0.0, 3.0), -3);
  });
  it('should subtract two whole numbers when both are zero', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 0.0, 0.0), 0);
  });
  it('should subtract two whole numbers when both are the same', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 3.0, 3.0), 0);
  });
  it('should subtract two whole numbers when both are the same and negative', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', -3.0, -3.0), 0);
  });
  it('should round float a', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 3), -2);
  });
  it('should divide two integers', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 3), 0.3333333333333333);
  });
  it('should divide two floats', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.5, 3.7), 0.5);
  });
  it('should divide two integers when one is negative', function () {
    assert.strictEqual(calculateNumber('DIVIDE', -1, 3), -0.3333333333333333);
  });
  it('should divide two floats when one is negative', function () {
    assert.strictEqual(calculateNumber('DIVIDE', -1.5, 3.7), -0.25);
  });
  it('should divide two integers when both are negative', function () {
    assert.strictEqual(calculateNumber('DIVIDE', -1, -3), 0.3333333333333333);
  });
  it('should divide two floats when both are negative', function () {
    assert.strictEqual(calculateNumber('DIVIDE', -1.5, -3.7), 0.25);
  });
  it('should divide two integers when one is zero', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 0, 3), 0);
  });
  it('should divide two floats when one is zero', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 0, 3.7), 0);
  });
  it('should divide two floats when both are zero', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 0, 0), 'Error');
  });
  it('should divide two whole numbers', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.0, 3.0), 0.3333333333333333);
  });
  it('should divide two whole numbers when one is negative', function () {
    assert.strictEqual(calculateNumber('DIVIDE', -1.0, 3.0), -0.3333333333333333);
  });
  it('should divide two whole numbers when both are negative', function () {
    assert.strictEqual(calculateNumber('DIVIDE', -1.0, -3.0), 0.3333333333333333);
  });
  it('should divide two whole numbers when one is zero', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 0.0, 3.0), 0);
  });
  it('should divide two whole numbers when both are zero', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
  });
  it('should divide two whole numbers when both are the same', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 3.0, 3.0), 1);
  });
  it('should divide two whole numbers when both are the same and negative', function () {
    assert.strictEqual(calculateNumber('DIVIDE', -3.0, -3.0), 1);
  });
  it('should return error when dividing by zero', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 3, 0), 'Error');
  });
});

