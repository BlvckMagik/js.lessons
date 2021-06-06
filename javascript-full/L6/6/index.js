const num = [1, 3, 4, 6, 7, 4];
function squareArray(arr) {
  const res = [];
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i = 0; i < arr.length; i += 1) {
    let square = 1;
    square = arr[i] * arr[i];
    res.push(square);
  }
  return res;
}
console.log(squareArray(num));
