const factorial = number => {
  if (number < 0 && number > 100) {
    return null;
  } else if (number === 0) {
    return number;
  }

  let result = 1;
  for (let i = 1; i <= number; i += 1) {
    result *= i;
  }
  return result;
};
