const getAdults = obj =>
  Object.entries(obj)
    .filter(arr => arr[1] >= 18)
    .map(user => user[0]);
const people = { 'John Doe': 19, Tom: 17, Bob: 18 };
console.log(getAdults(people));
