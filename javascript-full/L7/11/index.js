const WORD_LENGTH = 5;

const filterNames = (arr, text) =>
  arr
    .filter(word => word.length > WORD_LENGTH)
    .filter(word => word.includes(text));

const names = ['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'];
console.log(filterNames(names, 'ya'));
