function buildObject(keysList, valuesList) {
  return keysList.reduce((acc, el, i) => {
    acc[el] = valuesList[i];
    return acc;
  }, {});
}

// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 56 }
console.log(result);
