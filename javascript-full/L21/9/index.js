function finishList() {
  const list = document.querySelector('.list');
  const special = document.querySelector('.special');

  list.append(document.createElement('li'));
  list.prepend(document.createElement('li'));
  special.before(document.createElement('li'));
  special.after(document.createElement('li'));
}

finishList();
