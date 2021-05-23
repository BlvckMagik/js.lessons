const num = 1000;
let sum = 0;
let index = 0;
while (index <= num) {
  sum += index;
  index += 1;
}

const entire = Math.round(sum / 1234);
const remainder = sum % 1234;
console.log(entire > remainder);
console.log(entire);
console.log(remainder);
