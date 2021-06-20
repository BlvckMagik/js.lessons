const cleanTransactionsList = arr =>
  arr.filter(el => !isNaN(el)).map(el => '$' + parseFloat(el).toFixed(2));

const values = ['  1.9 ', '16.4', 17, ' 1 dollar '];
console.log(cleanTransactionsList(values));
