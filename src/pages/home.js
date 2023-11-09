import { projectCard } from '../components/projectCard.js';
import './home.css';

export const home = () => {
  

  const homeDiv = document.createElement('div');
  homeDiv.classList.add('home');

  homeDiv.id = 'home';  

  let storage = window.localStorage;

  let projects = storage.getItem('projects');

  if (!projects) {
    return;
  } else {
    projects = JSON.parse(storage.getItem('projects'));
    projects.forEach(project => {
      homeDiv.appendChild(projectCard(project));
    });
  }

  return (
    homeDiv
  );
};

