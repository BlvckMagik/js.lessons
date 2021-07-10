const event = {
  message: 'Welcome to the club, buddy',
  guests: [
    { name: 'John', age: 18, email: 'example@server.com' },
    { name: 'Lean', age: 14, email: 'example1@server.com' },
    { name: 'Mike', age: 12, email: 'example2@server.com' },
    { name: 'Van', age: 24, email: 'example3@server.com' },
  ],

  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({
        email,
        message: `Dear ${name}! ${this.message}`,
      }));
  },
};

console.log(event.getInvitations());
