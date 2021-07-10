const createArrayOfFunctions = (num = 0) => {
  const res = [];
  if (typeof num !== 'number') {
    return null;
  }
  for (let i = 0; i < num; i += 1) {
    res.push(function () {
      return i;
    });
  }
  console.log(res);
  return res;
};

console.log(createArrayOfFunctions('kaka'));
console.log(createArrayOfFunctions());

console.log(createArrayOfFunctions(9)[5]());
