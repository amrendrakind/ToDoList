import './style.css';
import {
  getStorageData, addTodo, saveEdit, displayToDo, getIsEditing,
} from './module/addRemove.js';

window.onload = () => {
  getStorageData();
  displayToDo();
};
const desc = document.querySelector('.taskList');
desc.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    if (!getIsEditing())addTodo();
    else saveEdit();
  }
});