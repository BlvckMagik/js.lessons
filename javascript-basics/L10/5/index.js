function camelCase(str) {
  let res = '';
  const splitStr = str.split(' ');
  for (let i = 0; i < splitStr.length; i += 1) {
    if (i === 0) {
      res += splitStr[i];
    } else if (i > 0) {
      res += splitStr[i][0].toUpperCase();
      res += splitStr[i].slice(1);
    }
  }
  return res;
}

// examples
console.log(camelCase('some function name')); // ===> someFunctionName
console.log(camelCase('get message')); // ===> getMessage
console.log(camelCase('render tasks list')); // ===> renderTasksList
console.log(camelCase('ren123der tasks list')); // ===> renderTasksList

// if (str.toLowerCase() !== str.toUpperCase()) {
//   return null;
// }
