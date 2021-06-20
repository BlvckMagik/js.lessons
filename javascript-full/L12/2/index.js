const reverseString = str => {
  if (typeof str !== 'string') {
    return null;
  }
  return str.split('').reverse().join('');
};

console.log(reverseString('1234567890'));
console.log(reverseString('Im big motherfucker'));
console.log(reverseString(1234567890));
