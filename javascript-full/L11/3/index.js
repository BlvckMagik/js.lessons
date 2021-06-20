const splitString = (str, len = 10) => {
  if (typeof str !== 'string') {
    return null;
  }
  const res = [];
  let startPos = 0;
  let dots = '';
  while (true) {
    const ch = str.substr(startPos, len);
    if (ch.length === 0) {
      break;
    }
    if (ch.length < len) {
      for (let i = ch.length; i < len; i += 1) {
        dots += '.';
      }
      res.push(ch + dots);
      return res;
    }
    res.push(ch);
    startPos += len;
  }
  return res;
};

console.log(splitString('12as dfas', 4));
console.log(splitString('12as dfasafdsdfd'));
console.log(splitString('123dss', 4));
console.log(splitString('12'));
console.log(splitString(12, 12));
