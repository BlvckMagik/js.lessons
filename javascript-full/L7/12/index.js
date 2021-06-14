const arrAverage = arr => arr.reduce((acc, num) => acc + num) / arr.length;

const num = [2, 5, 6, 3]; // 4
console.log(arrAverage(num));
