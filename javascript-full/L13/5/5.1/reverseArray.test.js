import { reverseArray } from './reverseArray';

it('should return reversed array', () => {
  expect(reverseArray([1, 2, 3, 4, 5, 6, 7])).toEqual([7, 6, 5, 4, 3, 2, 1]);
});

it('should return reversed array', () => {
  expect(reverseArray(['1', '2', '3', '4', '5', '6', '7'])).toEqual(["7", "6", "5", "4", "3", "2", "1"]);
});

it('should return null (not an array)', () => {
  expect(reverseArray(1)).toEqual(null);
});


