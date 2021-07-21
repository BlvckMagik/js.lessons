const listElem = document.querySelector('.list');
const inputElem = document.querySelector('.task-input');
const createTaskBtn = document.querySelector('.create-task-btn');
const listItem = document.querySelector('.list__item');

const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const renderTasks = tasksList => {
  listElem.innerHTML = '';
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.dataset.checked = done;
      checkbox.checked = done;
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

let task = '';

const setTask = event => {
  task = event.target.value;
};

const addNewElem = () => {
  if (task === '') return;
  tasks.push({ text: task, done: false });
  task = '';
  renderTasks(tasks);
  inputElem.value = '';
};

const turnElChecked = event => {
  if (!event.target.classList.contains('list__item-checkbox')) return;
  const checkbox = event.target;
  const text = checkbox.closest('.list__item').innerText;
  if (checkbox.dataset.checked === 'false') {
    tasks.find(el => Object.values(el).includes(text)).done = true;
  } else {
    tasks.find(el => Object.values(el).includes(text)).done = false;
  }
  renderTasks(tasks);
};

inputElem.addEventListener('input', setTask);
createTaskBtn.addEventListener('click', addNewElem);
listElem.addEventListener('click', turnElChecked);
