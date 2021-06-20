export const getSquaredArray = arr => arr.map(el => Math.pow(el, 2));

export const getOddNumbers = arr => arr.filter(el => el % 2 === 1);

export default (a, b) => a + b;

const num = [1, 2, 3, 4, 5, 6];
console.log(getOddNumbers(num));
