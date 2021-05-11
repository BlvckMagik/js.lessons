//my balance
const balance = 21600;

// describe some product
const id = 1001;
let productName = "IPhone 12 Pro Max";
let isAvailable = true;
let price = 20000;
const color = "Silver";
let storeAddress = "Kyiv, Melnichenka st";

console.log(balance > price && isAvailable);

if (isAvailable && storeAddress == "Kyiv, Melnichenka st") {
  console.log("You can buy this product in the store");
}

if (balance > price && color == "Silver") {
  console.log("You have enough money to buy product in silver color");
}

if (balance - 1000 > price) {
  console.log("You have enough money to buy this product");
}
