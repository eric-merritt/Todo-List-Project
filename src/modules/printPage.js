import { layout } from '../pages/layout.js';
import { closeIcon } from '../components/icons.js';

export const printPage = (page) => {

  const container = document.querySelector('.container');
  container.appendChild(layout());

  const heading = document.querySelector('.heading');
  heading.textContent = page.id === 'home' ? 'Home' : page.id === 'profile' ? 'Profile' : page.id;

 
  const pageDescription = document.querySelector('.page-description');

  if (pageDescription.style.display === 'none') {
    pageDescription.style.display = 'flex';

  };

  pageDescription.textContent = page.id === 'home' ? 'Welcome to your home page. Here you can view all of your projects.' : page.id === 'profile' ? 'Welcome to your profile page. Here you can view all of your personal details.' : 'This is a project specific page. Come here to view todos for a single project.';
  
  const closeBtn = closeIcon();
  pageDescription.appendChild(closeBtn);
  closeBtn.addEventListener('click', () => {
    pageDescription.style.display = 'none';
  });

  const main = document.getElementById('main');

  main.replaceChildren(page);

  return container;

}

export const currentPage = () => {
  const main = document.getElementById('main');

  return main.id;
};