const sortDesc = num => num.slice().sort((a, b) => b - a);
const numbers = [2, 6, 1, 3, 4, 56, 3, 2];

console.log(sortDesc(numbers));
console.log(numbers);
