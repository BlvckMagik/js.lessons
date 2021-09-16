const test1 = JSON.stringify({ name: 'Tom' });
const test2 = { name: 'Tom' };

const parseUser = Json => {
  try {
    return JSON.parse(Json);
  } catch (err) {
    return null;
  }
};

console.log(parseUser(test1));
console.log(parseUser(test2));
