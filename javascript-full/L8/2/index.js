/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

const concatProps = obj => {
  const res = [];
  for (const key in obj) {
    res.push(obj[key]);
  }
  return res;
};

// examples
const prop = { name: 'John Doe', age: 17, interest: 'football' };
console.log(concatProps(prop)); // ==> ['John Doe', 17, 'football']
