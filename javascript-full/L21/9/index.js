function finishList() {
  const list = document.querySelector('.list');
  const special = document.querySelector('.special');

  const eig = document.createElement('li');
  eig.textContent = '8';
  list.append(eig);

  const one = document.createElement('li');
  one.textContent = '1';
  list.prepend(one);

  const four = document.createElement('li');
  four.textContent = '4';
  special.before(four);

  const six = document.createElement('li');
  six.textContent = '6';
  special.after(six);
}

finishList();
