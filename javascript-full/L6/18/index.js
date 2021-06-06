const num = [1, 2, 3, 4, 1, 2, 3, 4, 5, 5, 6, 2, 1]; // 6
function uniqueCount(arr) {
  const res = [];

  for (const str of arr) {
    if (!res.includes(str)) {
      res.push(str);
    }
  }

  return res.length;
}

console.log(uniqueCount(num));
