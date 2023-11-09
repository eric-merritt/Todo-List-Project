import { createTodo, createProject } from './modules/todos.js';
import { format } from 'date-fns';
import './index.css';
import { getProjects, getCategories, getProject, getTodos } from './data/getData.js';
import { printPage } from './modules/printPage.js';
import { randomBytes } from 'crypto';
import { home } from './pages/home.js';
import { createTodoModal, createProjectModal } from './modules/modals.js';

// initialize local storage
const storage = window.localStorage;

// creating sample todos to be rendered on project pages and within project objects
const exampleTodo = (project) => {
  const id = randomBytes(8).toString('hex');
  let date = format(new Date(), 'MMM dd, yyyy');
  const storage = window.localStorage;

  let sample = createTodo(
    id,
    project,
    'Example Todo Title',
    'Example Todo Description',
    {type: null, items: []},
    date,
    'Low',
    false,
  );
  return sample;
  };

  // creating sample projects to be rendered on the page
  const exampleProject = (category) => {

    const project = createProject(

      randomBytes(8).toString('hex'),
      `${category} Project`,
      [exampleTodo(`${category} Project`), exampleTodo(`${category} Project`), exampleTodo(`${category} Project`)],
      category,
    );  

    return project;
  }

  const categories = getCategories();

const projects = categories.map(category => exampleProject(category));

let storedProjects = storage.getItem('projects');

if (storedProjects === null) {
  storage.setItem('projects', JSON.stringify(projects));
};

window.addEventListener('DOMContentLoaded', () => {
  printPage(home());
});


const todoModal = document.querySelector('#todoModal') || createTodoModal();
const projectModal = document.querySelector('#projectModal') || createProjectModal();

document.body.appendChild(todoModal);
document.body.appendChild(projectModal);
