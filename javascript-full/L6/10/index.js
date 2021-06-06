const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
function cloneArr(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const res = [];
  for (let i = 0; i < arr.length; i += 1) {
    const j = arr[i];
    res.push(j);
  }
  return res;
}

console.log(cloneArr(num));
