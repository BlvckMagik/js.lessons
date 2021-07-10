export const user = {
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  },

  setFullName(fullname) {
    const separatedName = fullname.split(' ');
    this.firstName = separatedName[0];
    this.lastName = separatedName[1];
  }
}

user.setFullName('John Doe')
console.log(user);
console.log(user.getFullName())