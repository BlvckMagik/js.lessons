const sumOfSquares = (...arg) =>
  [...arg].map(el => Math.pow(el, 2)).reduce((acc, el) => acc + el);

console.log(sumOfSquares(1, 2, 3, 4, 5, 6, 7, 8, 9));
