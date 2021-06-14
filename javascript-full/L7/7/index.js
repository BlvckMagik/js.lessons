const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.map(num => {
    if (num % 2 === 0) {
      return (num += delta);
    }
    return num;
  });
};

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(increaseEvenEl(numbers, 20));
console.log(numbers);
