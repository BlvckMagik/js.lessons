const getSpecialNumbers = num => num.filter(number => number % 3 !== 0);

const number = [1, 23, 4, 5, 6, 7, 8, 9, 13, 141, 516, 17, 18];
console.log(getSpecialNumbers(number));
