const buttonsArr = Array.from(document.querySelectorAll('.pagination__page'));
const btn1 = buttonsArr[0];
const btn2 = buttonsArr[1];
const btn3 = buttonsArr[2];

const handleClick = e => {
  console.log(e.target.dataset.pageNumber);
};

btn1.addEventListener('click', handleClick);
btn2.addEventListener('click', handleClick);
btn3.addEventListener('click', handleClick);
