function sumOfMillions() {
  let num = 10000000;
  let sum = 0;
  let index = 0;
  while (index <= num) {
    sum += index;
    index += 1;
  }

  return sum;
}

console.log(sumOfMillions());
