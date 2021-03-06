export function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};

User.prototype.setAge = function (newAge) {
  if (newAge < 0) return false;
  this.age = newAge;
  if (this.age >= 25)
    console.log(`New photo request was sent for ${this.name}`);
  return newAge;
};

const john = new User('John', 16);
const tom = new User('Tom', 26);
