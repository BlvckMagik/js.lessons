let res = 0;

export const add = num => (res += num);

export const decrease = num => (res -= num);

export const reset = () => (res = 0);

export const getMemo = () => res;

console.log(add(6));
console.log(decrease(2));
console.log(add(3));
console.log(reset());
console.log(add(5));
console.log(decrease(2));
console.log(getMemo());
