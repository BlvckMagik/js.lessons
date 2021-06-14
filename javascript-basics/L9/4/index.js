function getAbbreviation(str) {
  let res = '';
  const arr = str.split(' ');
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].length > 3) {
      res += arr[i][0];
    }
  }
  return res.toUpperCase();
}

// examples
console.log(getAbbreviation('some company name')); // ===> SCN
console.log(getAbbreviation('Union of Soviet Socialist Republics')); // ===> USSR
console.log(getAbbreviation('United States')); // ===> US
