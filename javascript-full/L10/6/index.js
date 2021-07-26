const getRandomNumbers = (length, from, to) => {
  if (Math.ceil(from) > to) {
    return null;
  }

  return new Array(length)
    .fill()
    .map(() => Math.round(Math.random() * (to - from) + from));
};

// examples
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 2, 2, 2, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 3, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 1.62)); // ==> null
