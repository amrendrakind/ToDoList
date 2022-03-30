let todolist = [];

const saveData = () => {
  localStorage.setItem('todos', JSON.stringify(todolist));
};

const getStorageData = () => {
  const localFormData = JSON.parse(localStorage.getItem('todos'));
  if (localFormData == null) {
    todolist = [];
  } else {
    todolist = localFormData;
  }
};

export {
  saveData, getStorageData,
};