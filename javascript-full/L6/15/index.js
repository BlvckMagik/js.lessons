const num = [1, 2, 150, 100, 50, 20];

function getSubArray(arr, n) {
  const res = [];
  for (let i = 0; i < n; i += 1) {
    res.push(arr[i]);
  }
  return res;
}

console.log(getSubArray(num, 3));
