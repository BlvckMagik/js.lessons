const getMaxAbsoluteNumber = arr => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  return Math.max(...arr.map(el => Math.abs(el)));
};

const array = [-777, 3, -1, 45, -20]; // 777
console.log(getMaxAbsoluteNumber(array));
