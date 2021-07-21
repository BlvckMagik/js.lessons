const listElem = document.querySelector('.list');
const inputElem = document.querySelector('.task-input');
const createTaskBtn = document.querySelector('.create-task-btn');
const listItem = document.querySelector('.list__item');

const tasks = [
  { text: 'Buy milk', id: Math.round(Math.random() * 1000), done: false },
  {
    text: 'Pick up Tom from airport',
    id: Math.round(Math.random() * 1000),
    done: false,
  },
  { text: 'Visit party', id: Math.round(Math.random() * 1000), done: false },
  { text: 'Visit doctor', id: Math.round(Math.random() * 1000), done: true },
  { text: 'Buy meat', id: Math.round(Math.random() * 1000), done: true },
];

const renderTasks = tasksList => {
  listElem.innerHTML = '';
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.dataset.checked = done;
      checkbox.checked = done;
      checkbox.dataset.id = id;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

const addNewElem = () => {
  if (inputElem.value === '') return;
  tasks.push({ text: inputElem.value, done: false });
  renderTasks(tasks);
  inputElem.value = '';
};

const turnElChecked = event => {
  const checkbox = event.target;
  const text = checkbox.closest('.list__item').innerText;

  if (checkbox.dataset.checked === 'false') {
    tasks.find(el => Object.values(el).includes(text)).done = true;
  } else {
    tasks.find(el => Object.values(el).includes(text)).done = false;
  }

  renderTasks(tasks);
};

createTaskBtn.addEventListener('click', addNewElem);
listElem.addEventListener('click', turnElChecked);
