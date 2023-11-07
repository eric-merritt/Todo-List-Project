import { getCategories, getProjects, getProject, getTodos } from '../data/getData.js';
import './sideNav.css';

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
        navLink.classList.add('nav-link');
        navLink.addEventListener('click', (event) => {
          event.target.nextSibling.classList.toggle('open');
        });
          
        let dropdownLink = document.createElement('a');
        dropdownLink.setAttribute('href', '#');
        dropdownLink.classList.add('dropdown-link');
        dropdownLink.innerHTML = `${index}`;
        navLink.appendChild(dropdownLink);
        let dropdown = document.createElement('ul');
        dropdown.classList.add('dropdown');
        const projectsString = JSON.parse(storage.getItem('projects'));
        let categoryProjects = projectsString.filter(project => project.category === index);
        categoryProjects.forEach(index => {
                let dropdownItem = document.createElement('li');
                dropdownItem.classList.add('dropdown-item');
                dropdownItem.innerHTML = `<a href="#${index.id}">${index.name}</a>`;
                // dropdownItem.onClick = () => {
                //   let project = getProject(index.id);
                //   let todos = getTodos(project);
                //   printPage(project, todos);
                // }
                dropdown.appendChild(dropdownItem);
                navLink.appendChild(dropdown);
            navLinkList.appendChild(navLink);

            });

            navBody.appendChild(navLinkList);
});
    
  return navBody;
      
          
    }
