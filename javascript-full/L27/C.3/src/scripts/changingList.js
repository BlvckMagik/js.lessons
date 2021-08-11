import { getItem, setItem } from './storage.js';
import { renderTasks } from './render.js';

const inputElem = document.querySelector('.task-input');
const listElem = document.querySelector('.list');

export const addNewElem = () => {
  const tasksList = getItem('tasksList');
  if (inputElem.value === '') return;
  tasksList.push({
    text: inputElem.value,
    id: Math.round(Math.random() * 1000),
    done: false,
  });
  setItem('tasksList', tasksList);
  renderTasks();
  inputElem.value = '';
};

export const turnElChecked = event => {
  const tasksList = getItem('tasksList');
  const isCheckbox = event.target.classList.contains('list__item-checkbox');
  if (!isCheckbox) {
    return;
  }

  const checkboxId = event.target.dataset.id;
  const taskElemInArray = tasksList.find(({ id }) => id === Number(checkboxId));
  const index = tasksList.findIndex(el => el == taskElemInArray);
  if (taskElemInArray.done) {
    taskElemInArray.done = false;
  } else {
    taskElemInArray.done = true;
  }
  tasksList[index] = taskElemInArray;
  setItem('tasksList', tasksList);
  event.target.closest('.list__item').classList.toggle('list__item_done');
  listElem.innerHTML = '';
  renderTasks();
};
