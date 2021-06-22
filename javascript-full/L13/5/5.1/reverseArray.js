export const reverseArray = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.slice().reverse();
};

const numbers = [1, 2, 3, 4, 5, 6, 7];
const numbers1 = ['1', '2', '3', '4', '5', '6', '7'];
const numbers2 = 1;
console.log(reverseArray(numbers));
console.log(reverseArray(numbers1));
console.log(reverseArray(numbers2));
console.log(numbers);
