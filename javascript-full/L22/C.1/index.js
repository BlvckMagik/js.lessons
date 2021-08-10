const div = document.querySelector('.rect_div');
const p = document.querySelector('.rect_p');
const span = document.querySelector('.rect_span');
const clearBtn = document.querySelector('.clear-btn');
const removeHandlers = document.querySelector('.remove-handlers-btn');
const attachHandlers = document.querySelector('.attach-handlers-btn');
const eventsList = document.querySelector('.events-list');

const addElem = (text, color) => {
  eventsList.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
};

const addGreenDiv = addElem.bind(null, 'DIV', 'green');
const addGreenP = addElem.bind(null, 'P', 'green');
const addGreenSpan = addElem.bind(null, 'SPAN', 'green');

const addGreyDiv = addElem.bind(null, 'DIV', 'grey');
const addGreyP = addElem.bind(null, 'P', 'grey');
const addGreySpan = addElem.bind(null, 'SPAN', 'grey');

const clearList = () => {
  eventsList.innerHTML = '';
};

const removeListener = () => {
  div.removeEventListener('click', addGreenDiv);
  p.removeEventListener('click', addGreenP);
  span.removeEventListener('click', addGreenSpan);

  div.removeEventListener('click', addGreyDiv, true);
  p.removeEventListener('click', addGreyP, true);
  span.removeEventListener('click', addGreySpan, true);
};

const addListener = () => {
  div.addEventListener('click', addGreenDiv);
  p.addEventListener('click', addGreenP);
  span.addEventListener('click', addGreenSpan);

  div.addEventListener('click', addGreyDiv, true);
  p.addEventListener('click', addGreyP, true);
  span.addEventListener('click', addGreySpan, true);
};

addListener();

clearBtn.addEventListener('click', clearList);
removeHandlers.addEventListener('click', removeListener);
attachHandlers.addEventListener('click', addListener);
