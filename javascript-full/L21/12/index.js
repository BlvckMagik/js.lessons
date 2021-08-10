const squaredNumbers = () => {
  Array.from(document.querySelectorAll('.number')).forEach(
    el => (el.dataset.squaredNumber = el.dataset.number * el.dataset.number)
  );
};

console.log(squaredNumbers());
