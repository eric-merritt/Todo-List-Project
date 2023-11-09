import { format } from 'date-fns';
import './todoCard.css';

import { getProjects, getProject, getTodoIndex, getProjectIndexByTodoId } from '../data/getData.js';
import { trashIcon } from './icons.js';

export const todoCard = (todo) => {

 


  let todoCardDiv = document.createElement('div');
  todoCardDiv.classList.add('todo-card');
  todoCardDiv.setAttribute('id', todo.id);

  let todoTitle = document.createElement('h3');
  todoTitle.classList.add('todo-card-title');
  todoTitle.textContent = todo.title;

  let trashBtn = trashIcon();
  trashBtn.setAttribute('id', todo.id);
  trashBtn.addEventListener('click', (e) => {
    let warning = confirm('Are you sure you want to delete this todo?');

    if (warning === true) {
    let storage = window.localStorage;
    let todoCard = e.target.closest('.todo-card');  
    let projects = getProjects();
  let projectIndex = getProjectIndexByTodoId(todoCard.id);
  let todoIndex = getTodoIndex(todoCard.id);

  projects[projectIndex].todoList.splice(todoIndex, 1);
  storage.setItem('projects', JSON.stringify(projects));
  
  todoCard.remove();
    } else {
      return;
    }
  });

  todoTitle.appendChild(trashBtn);




  todoCardDiv.appendChild(todoTitle);

  let todoDescription = document.createElement('p');
  todoDescription.classList.add('todo-description');
  todoDescription.textContent = 'Description:' + '\n' + todo.description;
  todoCardDiv.appendChild(todoDescription);

  let todoTaskList = document.createElement('ul');
  todoTaskList.classList.add('todo-task-list');

  if (todo.taskList.length > 0) {
    todoTaskList.textContent = 'Tasks:';
  todo.taskList.forEach(task => {
    let todoTask = document.createElement('li');
    todoTask.classList.add('todo-task');
    todoTask.textContent = task;
    todoTaskList.appendChild(todoTask);
  });} else {
    todoTaskList.textContent = 'Tasks: None';
  }
  todoCardDiv.appendChild(todoTaskList);



  let todoDueDate = document.createElement('p');
  todoDueDate.classList.add('todo-due-date');
  let date = todo.dueDate.slice(0,10);
  todoDueDate.textContent = format(new Date(date), 'MM/dd/yyyy');
  todoCardDiv.appendChild(todoDueDate);

  let todoPriority = document.createElement('p');
  todoPriority.classList.add('todo-priority');
  todoPriority.textContent = todo.priority;
  todoCardDiv.appendChild(todoPriority);

  return todoCardDiv;

};

  