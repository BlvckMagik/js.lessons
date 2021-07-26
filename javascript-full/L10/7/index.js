const superRound = (num, fix) => [
  Math.floor(num * 10 ** fix) / 10 ** fix,
  Math.round(num * 10 ** fix) / 10 ** fix,
  Math.ceil(num * 10 ** fix) / 10 ** fix,
  Math.trunc(num * 10 ** fix) / 10 ** fix,
  +num.toFixed(fix),
];

console.log(superRound(2.24323534, 3));
