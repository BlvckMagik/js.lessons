const clients1 = ['John', 'Andrij', 'Tom', 'Dominic'];
const balances1 = [150, 100, 50, 20];

function withdraw(clients, balances, client, amount) {
  let i = clients.indexOf(client);
  if (balances[i] < amount) {
    return -1;
  }
  balances[i] -= amount;
  return balances[i];
}
console.log(withdraw(clients1, balances1, 'Tom', 10));
console.log(balances1);
