const getTotalRevenue = transactions => {
  const res = [];
  transactions.forEach(userTransaction => res.push(userTransaction.amount));
  return res.reduce((acc, amount) => acc + amount);
};

// examples
const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];

const result = getTotalRevenue(dayTransactions); // ==> 310
console.log(result);
