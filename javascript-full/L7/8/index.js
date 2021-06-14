const cloneArr = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.slice();
};

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(cloneArr(numbers));
console.log(numbers);
