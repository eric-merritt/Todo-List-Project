import { getCategories } from '../data/getData.js';
import './sideNav.css';
import { printPage } from '../modules/printPage.js';
import { project } from '../pages/project.js';

export const sideNav = () => {
const storage = window.localStorage;

    let navBody = document.createElement('nav');
    	navBody.classList.add('side-nav');

    let linkListTitle = document.createElement('h3');
        linkListTitle.classList.add('link-list-title');
        linkListTitle.textContent = 'Project Categories';
				navBody.appendChild(linkListTitle);
				
let navLinkList = document.createElement('ul');
		navLinkList.classList.add('nav-link-list');

const categories = getCategories();

    categories.forEach(index => {
    	let navLink = document.createElement('li');
        navLink.classList.add(index.charAt(0).toLowerCase() + index.slice(1) + '-nav-link');
      let dropdownLink = document.createElement('a');
        dropdownLink.setAttribute('href', '#');
        dropdownLink.classList.add(index.charAt(0).toLowerCase() + index.slice(1) +'-dropdown-link');
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
                dropdownItemLink.textContent = index.title;
                dropdownItemLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    printPage(project(index.id));
                });
                dropdownItem.appendChild(dropdownItemLink);
                
                dropdown.appendChild(dropdownItem);
                navLink.appendChild(dropdown);
            navLinkList.appendChild(navLink);

            });

            navBody.appendChild(navLinkList);          

});


// filter by category using checkboxes
let filterFieldset = document.createElement('fieldset');
let filterLegend = document.createElement('legend');
filterLegend.textContent = 'Categories Shown';

filterFieldset.appendChild(filterLegend);

let categoryDiv = document.createElement('div');
categoryDiv.classList.add('category-div');

let workLabel = document.createElement('label');
workLabel.setAttribute('for', 'work');
workLabel.textContent = 'Work';
let workInput = document.createElement('input');
workInput.setAttribute('type', 'checkbox');
workInput.setAttribute('name', 'work');
workInput.setAttribute('id', 'work');
workInput.setAttribute('value', 'work');
workInput.setAttribute('checked', 'checked');
workLabel.appendChild(workInput);

let schoolLabel = document.createElement('label');
schoolLabel.setAttribute('for', 'school');
schoolLabel.textContent = 'School';
let schoolInput = document.createElement('input');
schoolInput.setAttribute('type', 'checkbox');
schoolInput.setAttribute('name', 'school');
schoolInput.setAttribute('id', 'school');
schoolInput.setAttribute('value', 'school');
schoolInput.setAttribute('checked', 'checked');
schoolLabel.appendChild(schoolInput);

let personalLabel = document.createElement('label');
personalLabel.setAttribute('for', 'personal');
personalLabel.textContent = 'Personal';
let personalInput = document.createElement('input');
personalInput.setAttribute('type', 'checkbox');
personalInput.setAttribute('name', 'personal');
personalInput.setAttribute('id', 'personal');
personalInput.setAttribute('value', 'personal');
personalInput.setAttribute('checked', 'checked');
personalLabel.appendChild(personalInput);

filterFieldset.appendChild(workLabel);
filterFieldset.appendChild(schoolLabel);
filterFieldset.appendChild(personalLabel);

filterFieldset.addEventListener('change', (e) => {
    let category = e.target.value;
    const categoryDropdown = document.querySelector(`.${category.charAt(0).toLowerCase() + category.slice(1)}-nav-link`);
    categoryDropdown.classList.toggle('hidden');

     // ensures that when a category is hidden, its dropdown is closed
    if (categoryDropdown.firstChild.nextSibling.classList.contains('open')) {
    categoryDropdown.firstChild.nextSibling.classList.toggle('open');
    };
});

navBody.appendChild(filterFieldset);

  return navBody;
      
          
    }
