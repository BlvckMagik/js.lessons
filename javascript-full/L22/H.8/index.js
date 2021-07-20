const checkbox = document.querySelector('.task-status');

checkbox.addEventListener('change', e => {
  if (e.target.checked) {
    console.log(true);
  } else console.log(false);
});
