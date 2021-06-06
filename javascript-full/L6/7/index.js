const firstArr = [1, 5, 6, 4, 7, 8, 8, 6];
const secondArr = [1, 5, 87, 9, 6, 4, 7, 8, 8, 6];

function checkSum(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let res = 0;
  for (let i = 0; i < arr.length; i += 1) {
    res += arr[i];
  }
  return res > 100;
}

console.log(checkSum(firstArr));
console.log(checkSum(secondArr));
