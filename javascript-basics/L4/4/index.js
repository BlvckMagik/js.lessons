//my balance
const balance = 15600;

// describe some product
const id = 1001;
let productName = "IPhone 12 Pro Max";
let isAvailable = true;
let price = 20000;
const color = "Silver";
let storeAddress = null;

if (balance > price) {
  console.log("You have enough money to buy " + productName);
} else {
  console.log("You do not have enough money to buy " + productName);
}

if (isAvailable == true) {
  console.log("Product " + productName + " is available now");
}
