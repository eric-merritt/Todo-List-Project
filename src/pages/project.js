import { getTodos, getProjects } from '../data/getData.js';
import { todoCard } from '../components/todoCard.js';
import { toolbar } from '../components/toolbar.js';
import './project.css';

export const project = (id) => {

  let projectDiv = document.createElement('div');
  projectDiv.classList.add('project');

  let tools = toolbar();

  projectDiv.appendChild(tools);

  let projects = getProjects();

  let targetProject = projects.filter(project => project.id === id)[0];


  let todos = getTodos(targetProject);

  if (!todos) {
    return;
  } else {
    todos.forEach(todo => {
      projectDiv.appendChild(todoCard(todo));
    });
  }

  projectDiv.id = targetProject.title;

  return projectDiv;

};




