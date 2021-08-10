const clients1 = ['John', 'Andrij', 'Tom', 'Dominic'];
const balances1 = [150, 100, 50, 20];

function withdraw(clients, balances, client, amount) {
  const clientIndex = clients.indexOf(client);
  if (balances[clientIndex] < amount) {
    return -1;
  }
  balances[clientIndex] -= amount;
  return balances[clientIndex];
}
console.log(withdraw(clients1, balances1, 'Tom', 10));
console.log(balances1);
