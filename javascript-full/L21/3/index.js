class Wallet {
  balance = 0;

  getBalance() {
    return this.balance;
  }

  deposit(sum) {
    this.balance += sum;
  }

  withdraw(sum) {
    if (this.balance < sum) console.log('No enough funds');
    else this.balance -= sum;
  }
}

const wall1 = new Wallet();
