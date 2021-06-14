const product = {
  id: 121,
  name: 'Clock',
  isAvailable: true,
  price: 1000,
  color: 'red',
  storeAddress: null,
};

const productName = product.name;
const storeAddress = product.storeAddress;
product.deliveryOptions = ['Новая почта', 'Укр почта', 'Самовывоз'];
console.log(productName);
console.log(storeAddress);
console.log(product);
