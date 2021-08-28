const asyncCalculator = numbr =>
  new Promise(resolve => {
    setTimeout(() => {
      console.log(`Initial value: ${numbr}`);
      resolve(numbr);
    }, 500);
  }).then(num =>
    new Promise(resolve => {
      setTimeout(() => {
        const res = num * num;
        console.log(`Squared value: ${res}`);
        resolve(res);
      }, 500);
    }).then(num => console.log(`Doubled value: ${num * 2}`))
  );

asyncCalculator(3);
