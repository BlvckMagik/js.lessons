const numbers = [2, 3, 54, 4, 1, 34, 5];
function getSum(arr) {
  let res = 0;
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i = 0; i < arr.length; i += 1) {
    res += arr[i];
  }
  return res;
}

console.log(getSum(numbers));
