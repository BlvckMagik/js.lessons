const listElem = document.querySelector('.list');
const inputElem = document.querySelector('.task-input');
const createTaskBtn = document.querySelector('.create-task-btn');
const listItem = document.querySelector('.list__item');

const tasks = [
  {
    text: 'Buy milk',
    id: Math.round(Math.random() * 1000),
    done: false,
    doneTime: new Date(),
  },
  {
    text: 'Pick up Tom from airport',
    id: Math.round(Math.random() * 1000),
    done: false,
    doneTime: new Date(),
  },
  {
    text: 'Visit party',
    id: Math.round(Math.random() * 1000),
    done: false,
    doneTime: new Date(),
  },
  {
    text: 'Visit doctor',
    id: Math.round(Math.random() * 1000),
    done: true,
    doneTime: new Date(),
  },
  {
    text: 'Buy meat',
    id: Math.round(Math.random() * 1000),
    done: true,
    doneTime: new Date(),
  },
];

const renderTasks = tasksList => {
  listElem.innerHTML = '';
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done || b.doneTime - a.doneTime)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
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
  tasks.push({
    text: inputElem.value,
    id: Math.round(Math.random() * 1000),
    done: false,
    doneTime: new Date(),
  });
  renderTasks(tasks);
  inputElem.value = '';
};

const turnElChecked = event => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');
  if (!isCheckbox) {
    return;
  }

  const checkboxId = event.target.dataset.id;
  const taskElemInArray = tasks.find(({ id }) => id === Number(checkboxId));
  taskElemInArray.doneTime = new Date();

  if (taskElemInArray.done) {
    taskElemInArray.done = false;
  } else {
    taskElemInArray.done = true;
  }
  event.target.closest('.list__item').classList.toggle('list__item_done');
  listElem.innerHTML = '';
  renderTasks(tasks);
};

createTaskBtn.addEventListener('click', addNewElem);
listElem.addEventListener('click', turnElChecked);
