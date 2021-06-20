const copyObj = obj => Object.assign({}, obj);
const people = { 'John Doe': 19, Tom: 17, Bob: 18 };
console.log(copyObj(people));
