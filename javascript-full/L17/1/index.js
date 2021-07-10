export const user = {
  firstName: 'Bob',
  lastName: 'Savitskiy',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(user.getFullName());
