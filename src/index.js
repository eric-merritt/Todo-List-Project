import { createTodo, createProject } from './modules/todos.js';
import { format } from 'date-fns';
import { createDialog } from './modules/createDialog.js';
import './index.css';
import { getProjects, getCategories, getProject, getTodos } from './data/getData.js';
import { printPage } from './modules/printPage.js';
import { randomBytes } from 'crypto';

const storage = window.localStorage;

// if (storage) {
//   console.log('Storage is available');
// };


// inserting the hidden modal for creatingTodo's
const todoModal = createDialog();
document.body.appendChild(todoModal);
// todoModal.showModal();


const exampleTodo = () => {
  const id = randomBytes(8).toString('hex');
  let date = format(new Date(), 'MMM dd, yyyy');
  const storage = window.localStorage;

  // creating sample todos for the projects that will be rendered on the page
  let sample = createTodo(
    id,
    'Example Todo Title',
    'Example Todo Description',
    {type: null, items: []},
    date,
    'Low',
    false,
  );
  storage.setItem(id, JSON.stringify(sample));
  return sample;
  };

  // creating sample projects to be rendered on the page
  const exampleProject = (category) => {

    const project = createProject(
      randomBytes(8).toString('hex'),
      'Example Project',
      [exampleTodo(), exampleTodo(), exampleTodo()],
      category,
    );  

    return project;
  }

  const categories = getCategories();

const projects = categories.map(category => exampleProject(category));

  let storedProjects = storage.getItem('projects');

storage.setItem('projects', JSON.stringify(projects));
  


window.addEventListener('DOMContentLoaded', () => {
  printPage('home');
});

