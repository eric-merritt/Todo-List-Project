import { getCategories } from '../data/getData.js';
import './sideNav.css';
import { printPage } from '../modules/printPage.js';
import { project } from '../pages/project.js';

export const sideNav = () => {
const storage = window.localStorage;

    let navBody = document.createElement('nav');
    navBody.classList.add('side-nav');
    let categories = getCategories();

    let navLinkList = document.createElement('ul');
    navLinkList.classList.add('nav-link-list');
    let linkListTitle = document.createElement('li');
    linkListTitle.classList.add('link-list-title');
    linkListTitle.innerHTML = '<h2>Projects</h2>';
    navLinkList.appendChild(linkListTitle);
    categories.forEach(index => {
        let navLink = document.createElement('li');
        navLink.classList.add(index.charAt(0).toLowerCase() + index.slice(1) + '-nav-link');
        let dropdownLink = document.createElement('a');
        dropdownLink.setAttribute('href', '#');
        dropdownLink.classList.add('dropdown-link');
        dropdownLink.addEventListener('click', (e) => {
            e.preventDefault();
            e.target.nextElementSibling.classList.toggle('open');
        });
        dropdownLink.innerHTML = `${index}`;
        navLink.appendChild(dropdownLink);
        let dropdown = document.createElement('ul');
        dropdown.classList.add('dropdown');
        const projectsString = JSON.parse(storage.getItem('projects'));
        let categoryProjects = projectsString.filter(project => project.category === index);
        categoryProjects.forEach(index => {
                let dropdownItem = document.createElement('li');
                dropdownItem.classList.add('dropdown-item');
                let dropdownItemLink = document.createElement('a');
                dropdownItemLink.setAttribute('href', '#');
                dropdownItemLink.classList.add('dropdown-item-link');
                dropdownItemLink.textContent = index.name;
                dropdownItemLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    project(index.id);
                });
                dropdownItem.appendChild(dropdownItemLink);
                
                dropdown.appendChild(dropdownItem);
                navLink.appendChild(dropdown);
            navLinkList.appendChild(navLink);

            });

            navBody.appendChild(navLinkList);
});
    
  return navBody;
      
          
    }
