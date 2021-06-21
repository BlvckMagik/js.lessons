import { calc } from './calculator';

it('should return summation result', () => {
  expect(calc('1 + 2')).toEqual('1 + 2 = 3');
});

it('should return subtraction result', () => {
  expect(calc('1 - 2')).toEqual('1 - 2 = -1');
});

it('should return multiplication result', () => {
  expect(calc('1 * 2')).toEqual('1 * 2 = 2');
});

it('should return division result', () => {
  expect(calc('2 / 1')).toEqual('2 / 1 = 2');
});

it('should return null (not a string)', () => {
  expect(calc(1 + 2)).toEqual(null);
});
