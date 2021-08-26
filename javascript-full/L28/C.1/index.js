// calc(3).add(2).mult(4).div(10).subtract(5).result(); // -3

const calc = initVal => {
  let res = initVal;

  const calculator = {
    add(val) {
      res += val;
      return this;
    },
    mult(val) {
      res *= val;
      return this;
    },
    div(val) {
      res /= val;
      return this;
    },
    subtract(val) {
      res -= val;
      return this;
    },
    result() {
      return res;
    },
  };

  return calculator;
};

console.log(calc(3).add(2).mult(4).div(10).subtract(5).result());
