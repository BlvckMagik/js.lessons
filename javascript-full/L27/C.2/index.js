const counterEl = document.querySelector('.counter__num');
const counter = document.querySelector('.counter');

const onBtnClick = event => {
  if (!event.target.classList.contains('counter__button')) return;

  const oldValue = Number(counterEl.textContent);

  const newValue =
    event.target.dataset.action === 'decrease' ? oldValue - 1 : oldValue + 1;

  localStorage.setItem('counterValue', newValue);
  counterEl.textContent = newValue;
};

const onStorageChange = () => {
  counterEl.textContent = localStorage.getItem('counterValue');
};

counter.addEventListener('click', onBtnClick);

window.addEventListener('storage', onStorageChange);
document.addEventListener('DOMContentLoaded', onStorageChange);
