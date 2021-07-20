const buttons = Array.from(document.querySelectorAll('.btn'));
const btn1 = buttons[0];
const btn2 = buttons[1];

const handleClick = e => {
  console.log(e.target.textContent);
};

btn1.addEventListener('click', handleClick);
btn2.addEventListener('click', handleClick);
