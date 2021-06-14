function getKeys(obj) {
  const keys = Object.keys(obj);
  return keys;
}

function getValues(obj) {
  const values = Object.values(obj);
  return values;
}

const product = {
  id: 121,
  name: 'Clock',
  isAvailable: true,
  price: 1000,
  color: 'red',
  storeAddress: null,
};

console.log(getKeys(product));
console.log(getValues(product));
