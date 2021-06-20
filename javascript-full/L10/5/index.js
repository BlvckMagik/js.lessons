const getTotalPrice = arr => {
  const res = arr.reduce((acc, el) => acc + el);
  return `$${Math.floor(res * 100) / 100}`;
};

const num = [15.1456, 156.4456, -4.6456, 789.1456];
console.log(getTotalPrice(num));
