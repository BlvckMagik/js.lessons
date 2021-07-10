class Order {
  constructor(price, city, type) {
    this.price = price;
    this.city = city;
    this.type = type;
  }

  id = (Math.random().toFixed(4) * 10000).toString();

  isConfirmed = false;

  dateCreated = new Date();

  checkPrice() {
    if (this.price > 1000) return true;
    return false;
  }

  confirmOrder() {
    this.isConfirmed = true;
    this.dateConfirmed = new Date();
  }

  isValidType() {
    if (this.type === 'Buy' || this.type === 'Sell') return true;
    return false;
  }
}

const order1 = new Order(100, 'Kyiv', 'Ka');
const order2 = new Order(1000, 'Kyiv', 'Buy');
const order3 = new Order(1001, 'Kyiv', 'Sell');
