/* eslint-disable no-restricted-syntax */

export const getAdults = obj => {
  const res = {};
  for (const key in obj) {
    if (obj[key] >= 18) {
      res[key] = obj[key];
    }
  }
  return res;
};

// examples
console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })); 
console.log(getAdults({ Ann: 56, Andrey: 7 })); 
console.log(getAdults({  })); 