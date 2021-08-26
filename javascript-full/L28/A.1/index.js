const maxFibonacci = number => {
  if (number < 0) {
    return;
  }

  let a = 0;
  let b = 1;
  let res = 0;

  while (res + a <= number) {
    res = a + b;
    a = b;
    b = res;
  }
  return res;
};
console.log(maxFibonacci(15));
