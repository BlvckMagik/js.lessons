const students = [
  "Andrey",
  "Denis",
  "Alex",
  "Nastya",
  "Ninja",
  "Skywoker",
  "Joda",
  "Leo",
];

function printArray(arr) {
  for (let index = 0; index < arr.length; index += 1) {
    console.log(arr[index]);
  }
}

function printArrayForOf(arr) {
  for (let el of arr) {
    console.log(el);
  }
}

printArray(students);
