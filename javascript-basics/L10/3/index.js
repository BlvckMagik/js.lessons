function copyObj(obj) {
  const res = {};
  for (const key in obj) {
    res[key] = obj[key];
  }
  return res;
}

const product = {
  id: 121,
  name: 'Clock',
  isAvailable: true,
  price: 1000,
  color: 'red',
  storeAddress: null,
};

console.log(copyObj(product));
