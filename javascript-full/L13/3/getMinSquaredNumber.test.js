import { getMinSquaredNumber } from './getMinSquaredNumber';

it('should return null (empty array)', () => {
  expect(getMinSquaredNumber([])).toEqual(null);
});

it('should return null (not an array)', () => {
  expect(getMinSquaredNumber('[1, 2, 3, 4, 5, 6]')).toEqual(null);
});

it('should return squared min number ', () => {
  expect(getMinSquaredNumber([-777, 3, -2, 6, 45, -20])).toEqual(4);
});
