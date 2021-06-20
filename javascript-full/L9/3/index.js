function getKeys(obj) {
  Object.keys(obj).forEach(item => console.log(item));
}
const people = { 'John Doe': 19, Tom: 17, Bob: 18 };
getKeys(people);
