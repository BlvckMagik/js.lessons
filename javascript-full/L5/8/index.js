function findDivCount(a, b, n) {
  let count = 0;
  for (let i = a; i <= b; i += 1) {
    if (i % n === 0) {
      count += 1;
      i += 1;
    }
  }
  return count;
}

console.log(findDivCount(3, 33, 4));
