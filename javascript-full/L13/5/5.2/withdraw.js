const clients1 = ['John', 'Andrij', 'Tom', 'Dominic'];
const balances1 = [150, 100, 50, 5];

export function withdraw(clients, balances, client, amount) {
  const i = clients.indexOf(client);
  if (balances[i] < amount) {
    return -1;
  }
  balances[i] -= amount;
  return balances[i];
}
console.log(withdraw(clients1, balances1, 'Tom', 10));
console.log(withdraw(clients1, balances1, 'Andrij', 10));
console.log(withdraw(clients1, balances1, 'Dominic', 10));
console.log(balances1);
