const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const num1 = [3, 32, 33, 1, 5, 1236, 7, 8, 9, 10, 11, 12, 13];
function checker(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let min = 0;
  let max = 0;
  let k = 0;
  for (let i = 0; i < arr.length; i += 1) {
    k = arr[i];
    if (min < k) {
      min = k;
    }
    if (max > k) {
      max = k;
    }
  }
  return min + max > 1000;
}

console.log(checker(num));
console.log(checker(num1));
