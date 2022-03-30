import './style.css';

const todolists = [
  {
    description: 'This is first descriptions.',
    completed: false,
    index: 2,
  },
  {
    description: 'This is second descriptions.',
    completed: false,
    index: 3,
  },
  {
    description: 'This is third descriptions.',
    completed: false,
    index: 4,
  },
  {
    description: 'This is fourth descriptions.',
    completed: false,
    index: 5,
  },
  {
    description: 'This is fifth descriptions.',
    completed: false,
    index: 6,
  },
];
const todoListElement = document.querySelector('.todo-container');
window.onload = () => {
  todolists.forEach((todo) => {
    const todoListHTML = `<li class="todo-item">
                              <div class="todo-content">
                                <input type="checkbox" name="checkbox" value = ${todo.index}/>
                                <p>${todo.description}</p>
                              </div>
                             <button type="button"><i class="fa fa-ellipsis-v"></i></button>
                          </li>`;
    todoListElement.insertAdjacentHTML('beforeend', todoListHTML);
  });
};