const arr = [1, 2, 3, 4, 5];

console.log(arr.push(111));
console.log(arr);

const students = ['Alex', 'Ann', 'Jaz', 'Viktor'];

const lastNumber = students.pop();
console.log(lastNumber);
console.log(students);

const points = [11, 24, 37, 40, 7];
const firstNumber = points.shift();
console.log(firstNumber);
console.log(points);

const ages = [18, 25, 31, 29, 50, 11, 1000000];
console.log(ages.unshift(22));
console.log(ages);

const numbers = [5, 0, 8, 10, -4, 50, 220];
console.log(numbers.includes(0));
console.log(numbers.includes(100));
