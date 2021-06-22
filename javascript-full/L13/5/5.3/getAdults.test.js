import { getAdults } from './getAdults';

it('should return adults', () => {
  expect(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })).toEqual({'John Doe': 19, Bob: 18});
});

it('should return adults', () => {
  expect(getAdults({ Ann: 56, Andrey: 7 })).toEqual({Ann: 56});
});

it('should return empty obj', () => {
  expect(getAdults({})).toEqual({});
});
