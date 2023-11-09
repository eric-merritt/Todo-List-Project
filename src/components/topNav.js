import './topNav.css';
import { printPage } from '../modules/printPage.js';
import { home } from '../pages/home.js';
import { profile } from '../pages/profile.js';
import { about } from '../pages/about.js';

export const topNav = () => {
  const nav = document.createElement('nav');
    nav.classList.add('top-nav');

    const navList = document.createElement('ul');
    navList.classList.add('nav-list');
    const homeBtn = document.createElement('li');
    homeBtn.classList.add('home-btn');
    const homeLink = document.createElement('a');
    homeLink.setAttribute('href', '#home');
    homeLink.textContent = 'Home';
    homeLink.addEventListener('click', (e) => {
      e.preventDefault();
      printPage(home());
    });
    homeBtn.appendChild(homeLink);
    
    const profileBtn = document.createElement('li');
    profileBtn.classList.add('profile');
    const profileLink = document.createElement('a');
    profileLink.setAttribute('href', '#profile');
    profileLink.textContent = 'Profile';
    profileLink.addEventListener('click', (e) => {
      e.preventDefault();
      printPage(profile());
    });
    profileBtn.appendChild(profileLink);

    const aboutBtn = document.createElement('li');
    aboutBtn.classList.add('about');
    const aboutLink = document.createElement('a');
    aboutLink.setAttribute('href', '#about');
    aboutLink.textContent = 'About';
    aboutLink.addEventListener('click', (e) => {
      e.preventDefault();
      printPage(about());
    });
    aboutBtn.appendChild(aboutLink);

    navList.appendChild(homeBtn);
    navList.appendChild(profileBtn);
    navList.appendChild(aboutBtn);
    nav.appendChild(navList);

  return nav;
}