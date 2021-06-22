import { withdraw } from './withdraw';

it('should return transaction result (40)', () => {
  expect(withdraw(['John', 'Andrij', 'Tom', 'Dominic'], [150, 100, 50, 5], 'Tom', 10)).toEqual(40);
});

it('should return transaction result (90)', () => {
  expect(withdraw(['John', 'Andrij', 'Tom', 'Dominic'], [150, 100, 50, 5], 'Andrij', 10)).toEqual(90);
});

it('should return transaction result (-1, not enough money)', () => {
  expect(withdraw(['John', 'Andrij', 'Tom', 'Dominic'], [150, 100, 50, 5], 'Dominic', 10)).toEqual(-1);
});

