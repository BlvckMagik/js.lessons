const getFiniteNumbers = arr => arr.filter(el => Number.isFinite(el));

const getFiniteNumbersV2 = arr => arr.filter(el => isFinite(el));

const getNaN = arr => arr.filter(el => Number.isNaN(el));

const getNaNV2 = arr => arr.filter(el => isNaN(el));

const getIntegers = arr => arr.filter(el => Number.isInteger(el));

const numbers = [13, 13.4, 123, '125', '123.3', undefined, NaN, Infinity];
const numbersWithNaN = [13, '125', '123.3', undefined, NaN, 'NaN', Infinity];

console.log(getIntegers(numbers));
