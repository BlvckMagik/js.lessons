function saveCalls(func) {
  const calls = [];
  return function WithMemory(...args) {
    calls.push(args);
    WithMemory.calls = calls;
    return func.apply(this, args);
  };
}

function test(a, b) {
  return Math.sqrt(a * a + b * b);
}

const testWithMemory = saveCalls(test);
console.log(testWithMemory(4, 2));
console.log(testWithMemory(9, 1));

console.log(testWithMemory.calls); // [ [4, 2], [9, 1] ]

/* Поддержка функций с контекстом */

const user = {
  name: 'John',
  sayHi() {
    return this.name;
  },
};

const methodWithMemory = saveCalls(user.sayHi);

console.log(methodWithMemory()); // 'Tom'
console.log(methodWithMemory.apply({ name: 'Tom' })); // 'Tom'

console.log(methodWithMemory.calls); // [ [] ]
