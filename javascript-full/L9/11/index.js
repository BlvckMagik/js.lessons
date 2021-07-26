const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17,
  },
};

const getCustomersList = obj => {
  const res = Object.values(obj);
  const id = Object.keys(obj);
  return res
    .map((el, i) => {
      const customerInfo = { ...el };
      customerInfo.id = id[i];
      return customerInfo;
    })
    .sort((a, b) => a.age - b.age);
};

console.log(getCustomersList(customers));
console.log(customers);
