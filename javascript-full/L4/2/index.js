const m = 20;
const n = 30;
let result = 1;
let i = m;
while (i <= n) {
  if (i % 2 === 1) {
    result *= i;
  }
  i += 1;
}
console.log(result);
