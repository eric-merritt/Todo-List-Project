import { topNav } from '../components/topNav.js';  // import topNav component
import { sideNav } from '../components/sideNav.js';  // import sideNav component
import { closeIcon } from '../components/icons.js';  // import icon module

export const layout = () => {

  const container = document.createElement('div');
    container.classList.add('content');
    container.setAttribute('id', 'content');

  const header = document.createElement('header');
    header.classList.add('header');
    let title = document.createElement('h1');
    title.textContent = 'Todo List Project';
    title.className = 'title';
    header.appendChild(title);
    let centerDiv = document.createElement('div');
    centerDiv.classList.add('center-div');
    let heading = document.createElement('h1');
    heading.textContent = ' ';
    heading.className = 'heading';
    let description = document.createElement('span');
    let closeBtn = closeIcon();
    closeBtn.onclick = () => {
      description.style.display = 'none';
    }
    description.innerHTML = ' ';
    description.appendChild(closeBtn);
    description.className = 'page-description';
    centerDiv.appendChild(heading);
    centerDiv.appendChild(description);
    header.appendChild(centerDiv);
    header.appendChild(topNav());
    
  const sideBar = document.createElement('div');
    sideBar.classList.add('sidebar');
    sideBar.appendChild(sideNav());

  const mainContent = document.createElement('div');
    mainContent.classList.add('main');
    mainContent.setAttribute('id', 'main');

  container.appendChild(header);
  container.appendChild(sideBar);
  container.appendChild(mainContent);

  return container;

};


