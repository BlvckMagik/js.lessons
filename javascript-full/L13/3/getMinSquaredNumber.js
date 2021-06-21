export const getMinSquaredNumber = arr => {
  if (typeof arr !== 'object' || arr.length === 0) {
    return null;
  }
  const abs = arr.map(el => Math.abs(el));
  return Math.pow(Math.min(...abs), 2);
};

const num = [-777, 3, -2, 6, 45, -20];
const num1 = [-777, 3, 6, 45, -20];
console.log(getMinSquaredNumber(num));
console.log(getMinSquaredNumber(num1));
console.log(getMinSquaredNumber([]));
console.log(getMinSquaredNumber('ka'));
