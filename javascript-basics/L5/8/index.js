function countArea(chickens, caws, pigs) {
  return chickens * 0.2 + caws * 1.5 + pigs * 0.5;
}

const countAreaArrow = (chickens, caws, pigs) => {
  return chickens * 0.2 + caws * 1.5 + pigs * 0.5;
};

console.log(countAreaArrow(10, 40, 20));
console.log(countAreaArrow(30, 50, 20));
console.log(countArea(13, 46, 24));
console.log(countArea(37, 51, 23));
console.log(countArea(42, 34, 65));
