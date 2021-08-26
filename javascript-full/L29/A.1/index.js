const delay = (delay, callback, contexst, ...args) => {
  setTimeout(() => {
    callback.call(contexst, ...args);
  }, delay);
};

const test = (a, b, c, d) => {
  console.log(a + '+' + b + '+' + c + '+' + d);
};

delay(3000, test, null, 'tom', 'mot', 'asd', 'asq');
