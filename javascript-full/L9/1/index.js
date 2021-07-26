const ADULT_AGE = 18;

const getAdults = obj =>
  Object.entries(obj)
    .filter(arr => arr[1] >= ADULT_AGE)
    .map(user => user[0]);

const people = { 'John Doe': 19, Tom: 17, Bob: 18 };
console.log(getAdults(people));
