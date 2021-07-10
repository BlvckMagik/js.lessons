class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(newAge) {
    if (newAge < 0) return false;
    this.age = newAge;
    if (this.age >= 25)
      console.log(`New photo request was sent for ${this.name}`);
    return newAge;
  }

  static createEmpty() {
    return new User('', null);
  }
}

const user1 = new User('Tom', 14);
const user2 = User.createEmpty();
