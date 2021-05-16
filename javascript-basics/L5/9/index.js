function countCommision(amount, currency) {
  if (currency == "UAH") {
    if (amount < 1000) {
      return (amount / 100) * 2;
    } else {
      return (amount / 100) * 1;
    }
  } else if (currency == "USD") {
    if (amount < 5000) {
      return (amount / 100) * 0.5;
    } else {
      return (amount / 100) * 0.25;
    }
  } else if (currency == "EUR") {
    if (amount < 3000) {
      return (amount / 100) * 0.75;
    } else {
      return amount;
    }
  }
}

console.log(countCommision(10000, "UAH"));
console.log(countCommision(500, "UAH"));
console.log(countCommision(10000, "UAH"));
console.log(countCommision(60000, "USD"));
console.log(countCommision(100, "EUR"));
