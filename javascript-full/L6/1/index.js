const numbers = [1, 2, 3, 4, 6];
function getArrayBounds(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return [arr.length, arr[0], arr[arr.length - 1]];
}
console.log(getArrayBounds(numbers));
console.log(getArrayBounds(5));
