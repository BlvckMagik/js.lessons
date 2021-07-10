export default {
  firstName: 'John',
  lastName: 'Doe',

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(value) {
    const [firstname, lastname] = value.split(' ');
    this.firstName = firstname;
    this.lastName = lastname;
  },
};
