function capitalize(str) {
  const res = str[0].toUpperCase() + str.slice(1);
  return res;
}

// examples
console.log(capitalize('cake')); // ==> Cake
console.log(capitalize('Monday')); // ==> Monday
console.log(capitalize('hello, it is me')); // ==> Hello, it is me
