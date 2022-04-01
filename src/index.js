import './style.css';
import {
  getStorageData, clearCompletedList, addTodo, saveEdit, displayToDo, getIsEditing,
} from './module/addRemove.js';

window.onload = () => {
  getStorageData();
  displayToDo();
};

const refreshBtn = document.querySelector('.refresh-btn');
refreshBtn.addEventListener('click', () => {
  window.location.reload();
});

const desc = document.querySelector('.taskList');
desc.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    if (!getIsEditing())addTodo();
    else saveEdit();
  }
});

const clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener('click', () => {
  clearCompletedList();
});