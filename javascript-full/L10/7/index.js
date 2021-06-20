const superRound = (num, fix) => [
  Math.floor(num * Math.pow(10, fix)) / Math.pow(10, fix),
  Math.round(num * Math.pow(10, fix)) / Math.pow(10, fix),
  Math.ceil(num * Math.pow(10, fix)) / Math.pow(10, fix),
  Math.trunc(num * Math.pow(10, fix)) / Math.pow(10, fix),
  +num.toFixed(fix),
];

console.log(superRound(2.24323534, 3));
