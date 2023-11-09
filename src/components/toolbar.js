import { addIcon, downChevron } from './icons.js';

// import { createProjectModal } from './projectModal.js';

import { createTodoModal, createProjectModal } from '../modules/modals.js';


import './toolbar.css';

export const toolbar = () => {

  const todoModal = document.querySelector('#todoModal') || createTodoModal();

  const projectModal = document.querySelector('#projectModal') || createProjectModal();

  const tools = document.createElement('div');
    tools.setAttribute('id', 'tools');
    tools.setAttribute('class', 'toolbar');


  const toolList = document.createElement('ul');
    toolList.className = 'tool-list';

  const addTool = document.createElement('li');
    addTool.setAttribute('id', 'add-tool');
    addTool.setAttribute('class', 'add-tool-list'); 
    
    const downArrow = downChevron();
    const addBtn = addIcon();
    addTool.appendChild(addBtn);
    addTool.appendChild(downArrow);

    addTool.addEventListener('mouseover', () => {
      downArrow.classList.add('active');
    });

    addTool.addEventListener('mouseout', () => {
      downArrow.classList.remove('active');
    });
    
  const addToolDropdown = document.createElement('ul');
    addToolDropdown.setAttribute('id', 'add-tool-dropdown');
    addToolDropdown.setAttribute('class', 'add-tool-dropdown');

  const addTodoBtn = document.createElement('li');
    addTodoBtn.setAttribute('id', 'add-todo-btn');
    addTodoBtn.setAttribute('class', 'add-tool-dropdown-item');
    addTodoBtn.innerHTML = 'New Todo';
    addTodoBtn.addEventListener('click', () => {
      todoModal.showModal();
    });

  const addProjectBtn = document.createElement('li');
    addProjectBtn.setAttribute('id', 'add-project-btn');
    addProjectBtn.setAttribute('class', 'add-tool-dropdown-item');
    addProjectBtn.innerHTML = 'New Project';
    addProjectBtn.addEventListener('click', () => {

      projectModal.showModal();
    });

    addToolDropdown.appendChild(addTodoBtn);
    addToolDropdown.appendChild(addProjectBtn);

    addTool.appendChild(addToolDropdown);

    const headerDiv = document.createElement('div');
    headerDiv.setAttribute('class', 'toolbar-header-div');
    
  const header = document.createElement('h3');
    header.setAttribute('class', 'toolbar-header');
    header.textContent = 'Toolbar: ';
    headerDiv.appendChild(header);

    toolList.appendChild
  
    const closeBtnListItem = document.createElement('li');
    closeBtnListItem.setAttribute('class', 'close-btn-list-item');

  const closeBtn = document.createElement('ion-icon');
    closeBtn.setAttribute('name', 'close-outline');
    closeBtn.setAttribute('id', 'close-btn');
    closeBtn.setAttribute('class', 'toolbar-close-btn');

  closeBtnListItem.appendChild(closeBtn);
    closeBtnListItem.addEventListener('click', (e) => {
      e.preventDefault();
      tools.style.display = 'none';
      const centerDiv = document.querySelector('div.center-div');

const openToolSpan = document.createElement('span');
      openToolSpan.className = 'open-tool-span';
      openToolSpan.innerHTML = 'You can reopen the Toolbar here.';
      openToolSpan.setAttribute('class', 'open-tool-span');

      const openToolButton = document.createElement('ion-icon');
      openToolButton.setAttribute('name', 'add-outline');
      openToolButton.setAttribute('id', 'open-tool-btn');
      openToolButton.setAttribute('class', 'open-tool-btn');
      openToolButton.addEventListener('click', () => {
        tools.style.display = 'flex';
        openToolSpan.style.display = 'none';
      });
      openToolSpan.appendChild(openToolButton);

      centerDiv.appendChild(openToolSpan);

      const closeToolSpan = document.createElement('ion-icon');
      closeToolSpan.setAttribute('name', 'close-outline');
      closeToolSpan.setAttribute('id', 'close-tool-btn');
      closeToolSpan.setAttribute('class', 'close-tool-btn');
      closeToolSpan.addEventListener('click', () => {
        openToolSpan.textContent = '';
        
        
                       
            openToolSpan.innerHTML += closeToolSpan;
            
      });
      });
      
  toolList.appendChild(addTool);
  toolList.appendChild(closeBtnListItem);
  tools.appendChild(headerDiv);
  tools.appendChild(toolList);

  return tools;
      



    };
