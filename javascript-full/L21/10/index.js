function finishForm() {
  const newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.name = 'login';
  document.querySelector('.login-form').prepend(newInput);

  const oldInput = document.querySelector('[name = password]');
  oldInput.type = 'password';
}

finishForm();
