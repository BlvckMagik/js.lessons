import getSum, { getSquaredArray, getOddNumbers } from './calculator.js';

it('should return sum of two numbers', () => {
  expect(getSum(1, 3)).toEqual(4);
});

it('should return squared array', () => {
  expect(getSquaredArray([1, 2, 3, 4, 5, 6])).toEqual([1, 4, 9, 16, 25, 36]);
});

it('should return odd numbers', () => {
  expect(getOddNumbers([1, 2, 3, 4, 5, 6])).toEqual([1, 3, 5]);
});
