const getEvenNumbers = arr => arr.filter(el => el % 2 === 0);

it('should return even numbers', () => {
  expect(getEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
});
