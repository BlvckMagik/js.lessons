const transformToObject = arr => {
  const res = {};
  for (const i of arr) res[i] = i;

  return res;
};

// examples
console.log(transformToObject(['a', 17.1, 'John Doe'])); // ==> { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' }
