const makePromise = value => Promise.resolve(value);

makePromise(17).then(number => {
  console.log(number); // 17
});
