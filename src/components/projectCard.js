import './projectCard.css';

export const projectCard = (project) => {

  const projectCardDiv = document.createElement('div');
  projectCardDiv.classList.add('project-card');
  projectCardDiv.setAttribute('id', project.id);
  
  const projectCardTitle = document.createElement('h2');
  projectCardTitle.classList.add('project-card-title');
  projectCardTitle.textContent = project.title;
  projectCardDiv.appendChild(projectCardTitle);

  const projectCardCategory = document.createElement('h3');
  projectCardCategory.classList.add('project-card-category');
  projectCardCategory.textContent = 'Category: ' + project.category;
  projectCardDiv.appendChild(projectCardCategory);

  const projectCardTodoList = document.createElement('ul');
  projectCardTodoList.classList.add('project-card-todo-list');
  projectCardDiv.appendChild(projectCardTodoList);

  const projectCardTodoListTitle = document.createElement('h4');
  projectCardTodoListTitle.classList.add('project-card-todo-list-title');
  projectCardTodoListTitle.textContent = project.todoList.length > 0 ? 'Todo List Items: ' + project.todoList.length : 'No Todos';
  projectCardTodoList.appendChild(projectCardTodoListTitle);

  const projectCardDueDate = document.createElement('h4');
  projectCardDueDate.classList.add('project-card-due-date');
  projectCardDueDate.textContent = project.dueDate;
  projectCardDiv.appendChild(projectCardDueDate);

  return projectCardDiv;
};
