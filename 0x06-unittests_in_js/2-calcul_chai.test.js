const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', function () {
  it('should return the sum of two integers', function () {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
  });
  it('should return the sum of two floats', function () {
    expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
  });
  it('should return the sum of two integers when one is negative', function () {
    expect(calculateNumber('SUM', -1, 3)).to.equal(2);
  });
  it('should return the sum of two floats when one is negative', function () {
    expect(calculateNumber('SUM', -1.5, 3.7)).to.equal(3);
  });
  it('should return the sum of two integers when both are negative', function () {
    expect(calculateNumber('SUM', -1, -3)).to.equal(-4);
  });
  it('should return the sum of two floats when both are negative', function () {
    expect(calculateNumber('SUM', -1.5, -3.7)).to.equal(-5);
  });
  it('should return the sum of two integers when one is zero', function () {
    expect(calculateNumber('SUM', 0, 3)).to.equal(3);
  });
  it('should return the sum of two floats when one is zero', function () {
    expect(calculateNumber('SUM', 0, 3.7)).to.equal(4);
  });
  it('should return the sum of two floats when both are zero', function () {
    expect(calculateNumber('SUM', 0, 0)).to.equal(0);
  });
  it('should return the sum of two whole numbers', function () {
    expect(calculateNumber('SUM', 1.0, 3.0)).to.equal(4);
  });
  it('should return the sum of two whole numbers when one is negative', function () {
    expect(calculateNumber('SUM', -1.0, 3.0)).to.equal(2);
  });
  it('should return the sum of two whole numbers when both are negative', function () {
    expect(calculateNumber('SUM', -1.0, -3.0)).to.equal(-4);
  });
  it('should return the sum of two whole numbers when one is zero', function () {
    expect(calculateNumber('SUM', 0.0, 3.0)).to.equal(3);
  });
  it('should return the sum of two whole numbers when both are zero', function () {
    expect(calculateNumber('SUM', 0.0, 0.0)).to.equal(0);
  });
  it('should return the sum of two whole numbers when both are the same', function () {
    expect(calculateNumber('SUM', 3.0, 3.0)).to.equal(6);
  });
  it('should return the sum of two whole numbers when both are the same and negative', function () {
    expect(calculateNumber('SUM', -3.0, -3.0)).to.equal(-6);
  });
  it('should round float a', function () {
    expect(calculateNumber('SUM', 1.4, 3)).to.equal(4);
  });
  it('should round float b', function () {
    expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
  });
  it('should subtract two integers', function () {
    expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
  });
  it('should subtract two floats', function () {
    expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
  });
  it('should subtract two integers when one is negative', function () {
    expect(calculateNumber('SUBTRACT', -1, 3)).to.equal(-4);
  });
  it('should subtract two floats when one is negative', function () {
    expect(calculateNumber('SUBTRACT', -1.5, 3.7)).to.equal(-5);
  });
  it('should subtract two integers when both are negative', function () {
    expect(calculateNumber('SUBTRACT', -1, -3)).to.equal(2);
  });
  it('should subtract two floats when both are negative', function () {
    expect(calculateNumber('SUBTRACT', -1.5, -3.7)).to.equal(3);
  });
  it('should subtract two integers when one is zero', function () {
    expect(calculateNumber('SUBTRACT', 0, 3)).to.equal(-3);
  });
  it('should subtract two floats when one is zero', function () {
    expect(calculateNumber('SUBTRACT', 0, 3.7)).to.equal(-4);
  });
  it('should subtract two floats when both are zero', function () {
    expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
  });
  it('should subtract two whole numbers', function () {
    expect(calculateNumber('SUBTRACT', 1.0, 3.0)).to.equal(-2);
  });
  it('should subtract two whole numbers when one is negative', function () {
    expect(calculateNumber('SUBTRACT', -1.0, 3.0)).to.equal(-4);
  });
  it('should subtract two whole numbers when both are negative', function () {
    expect(calculateNumber('SUBTRACT', -1.0, -3.0)).to.equal(2);
  });
  it('should subtract two whole numbers when one is zero', function () {
    expect(calculateNumber('SUBTRACT', 0.0, 3.0)).to.equal(-3);
  });
  it('should subtract two whole numbers when both are zero', function () {
    expect(calculateNumber('SUBTRACT', 0.0, 0.0)).to.equal(0);
  });
  it('should subtract two whole numbers when both are the same', function () {
    expect(calculateNumber('SUBTRACT', 3.0, 3.0)).to.equal(0);
  });
  it('should subtract two whole numbers when both are the same and negative', function () {
    expect(calculateNumber('SUBTRACT', -3.0, -3.0)).to.equal(0);
  });
  it('should round float a', function () {
    expect(calculateNumber('SUBTRACT', 1.4, 3)).to.equal(-2);
  });
  it('should divide two integers', function () {
    expect(calculateNumber('DIVIDE', 1, 3)).to.equal(0.3333333333333333);
  });
  it('should divide two floats', function () {
    expect(calculateNumber('DIVIDE', 1.5, 3.7)).to.equal(0.5);
  });
  it('should divide two integers when one is negative', function () {
    expect(calculateNumber('DIVIDE', -1, 3)).to.equal(-0.3333333333333333);
  });
  it('should divide two floats when one is negative', function () {
    expect(calculateNumber('DIVIDE', -1.5, 3.7)).to.equal(-0.25);
  });
  it('should divide two integers when both are negative', function () {
    expect(calculateNumber('DIVIDE', -1, -3)).to.equal(0.3333333333333333);
  });
  it('should divide two floats when both are negative', function () {
    expect(calculateNumber('DIVIDE', -1.5, -3.7)).to.equal(0.25);
  });
  it('should divide two integers when one is zero', function () {
    expect(calculateNumber('DIVIDE', 0, 3)).to.equal(0);
  });
  it('should divide two floats when one is zero', function () {
    expect(calculateNumber('DIVIDE', 0, 3.7)).to.equal(0);
  });
  it('should divide two floats when both are zero', function () {
    expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
  });
  it('should divide two whole numbers', function () {
    expect(calculateNumber('DIVIDE', 1.0, 3.0)).to.equal(0.3333333333333333);
  });
  it('should divide two whole numbers when one is negative', function () {
    expect(calculateNumber('DIVIDE', -1.0, 3.0)).to.equal(-0.3333333333333333);
  });
  it('should divide two whole numbers when both are negative', function () {
    expect(calculateNumber('DIVIDE', -1.0, -3.0)).to.equal(0.3333333333333333);
  });
  it('should divide two whole numbers when one is zero', function () {
    expect(calculateNumber('DIVIDE', 0.0, 3.0)).to.equal(0);
  });
  it('should divide two whole numbers when both are zero', function () {
    expect(calculateNumber('DIVIDE', 0.0, 0.0)).to.equal('Error');
  });
  it('should divide two whole numbers when both are the same', function () {
    expect(calculateNumber('DIVIDE', 3.0, 3.0)).to.equal(1);
  });
  it('should divide two whole numbers when both are the same and negative', function () {
    expect(calculateNumber('DIVIDE', -3.0, -3.0)).to.equal(1);
  });
  it('should return error when dividing by zero', function () {
    expect(calculateNumber('DIVIDE', 3, 0)).to.equal('Error');
  });
});
