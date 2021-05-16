function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  return sum(firstFrom, firstTo) > sum(secondFrom, secondTo);
}

function sum(from, to) {
  let sum = 0;
  while (from <= to) {
    sum += from;
    from += 1;
  }
  return sum;
}

console.log(compareSums(3, 7, 5, 6));
console.log(compareSums(5, 6, 3, 7));
console.log(compareSums(5, 9, 3, 7));
console.log(compareSums(5, 6, 3, 11));
console.log(compareSums(5, 6, 3, 4));
