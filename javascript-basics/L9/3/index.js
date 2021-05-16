const arr = [1, 2, 3, 4, 5];

arr.push(111);
console.log(arr[5]);
console.log(arr);

const students = ["Alex", "Ann", "Jaz", "Viktor"];

let lastNumber = students.pop();
console.log(lastNumber);
console.log(students);

const points = [11, 24, 37, 40, 7];
let firstNumber = points.shift();
console.log(firstNumber);
console.log(points);

/* unshift - добавит элемент в начало массива */

/**
 * С помощью метода unshift добавь число 22 в начало массива ages
 * Выведи в консоль результат работы метода unshift, а так же массив ages после выполнения unshift
 * */

const ages = [18, 25, 31, 29, 50];

// put your code here

/* ======================================= */
/* ===> НЕ мутирующие методы массивов <=== */
/* ===> НЕ изменяют исходный массив <===== */
/* ======================================= */

/* includes - проверяет есть ли элемент в массиве */

/**
 * С помощью метода includes проверь есть ли числа 0 и 100 в массиве numbers. Результат проверок выведи в консоль
 */
const numbers = [5, 0, 8, 10, -4, 50, 220];

// put your code here
