const calc = exp => {
  const [a, operator, b] = exp.split(' ');
  let res = 0;
  switch (operator) {
    case '+':
      res = Number(a) + Number(b);
      break;
    case '-':
      res = Number(a) - Number(b);
      break;
    case '*':
      res = Number(a) * Number(b);
      break;
    case '/':
      res = Number(a) / Number(b);
      break;
    default:
      return null;
  }
  return `${exp} = ${res}`;
};

console.log(calc('4 + 5'));
console.log(calc('4 - 5'));
console.log(calc('3 * 5'));
console.log(calc('3 / 6'));
