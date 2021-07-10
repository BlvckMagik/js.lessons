const createCalculator = () => {
  let res = 0;

  const add = num => (res += num);

  const decrease = num => (res -= num);

  const reset = () => (res = 0);

  const getMemo = () => res;
  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};

const calc1 = createCalculator();
const calc2 = createCalculator();
console.log(calc1.add(6));
console.log(calc2.decrease(2));
console.log(calc2.add(3));
console.log(calc1.reset());
console.log(calc2.add(5));
console.log(calc2.reset());
console.log(calc2.decrease(2));
console.log(calc1.getMemo());
console.log(calc2.getMemo());
