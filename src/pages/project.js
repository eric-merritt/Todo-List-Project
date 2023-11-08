import { getTodos, getProjects } from '../data/getData.js';
import { todoCard } from '../components/todoCard.js';
import './project.css';
import { closeIcon } from '../components/icons.js';

export const project = (id) => {

  const storage = window.localStorage;

  let projectDiv = document.createElement('div');
  projectDiv.classList.add('project');

  let projects = getProjects();
  console.log(projects);

  let targetProject = projects.filter(project => project.id === id)[0];
  console.log(targetProject);

  const heading = document.querySelector('.heading');
  heading.textContent = targetProject.name;

  const pageDescription = document.querySelector('.page-description');
  pageDescription.textContent = 'This is a project specific page. It will display all todos associated with the project.';

  let closeBtn = closeIcon();

    closeBtn.onclick = () => {
      pageDescription.style.display = 'none';
    }

  pageDescription.appendChild(closeBtn);

  let todos = getTodos(targetProject);

  if (!todos) {
    return;
  } else {
    todos.forEach(todo => {
      projectDiv.appendChild(todoCard(todo));
    });
  }

  const main = document.getElementById('main');

  main.replaceChildren(projectDiv);
};




