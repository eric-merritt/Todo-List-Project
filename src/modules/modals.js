import { createTodo, createProject } from './todos.js';
import { format } from 'date-fns';
import './modals.css';
import { randomBytes } from 'crypto';
import { getProjects, getProject, getProjectIndex, categories } from '../data/getData.js';
import { project as renderProject } from '../pages/project.js';
import { printPage } from './printPage.js'; 

export const createTodoModal = () => {

  let storage = window.localStorage;
  let projects = JSON.parse(storage.getItem('projects'));


const todoModal = document.createElement('dialog');
  todoModal.type = 'modal';
  todoModal.setAttribute('id','todoModal');

  const todoModalForm = document.createElement('form');
  todoModalForm.type = 'form';

  const modalHeading = document.createElement('h2');
  modalHeading.textContent = 'Add Todo';

  todoModalForm.appendChild(modalHeading);
  
  const projectGroup = document.createElement('fieldset');
    projectGroup.className = 'projectGroup';

  const projectLabel = document.createElement('label');
    projectLabel.setAttribute('type','label');
    projectLabel.textContent = 'Project: ';
    projectLabel.for = 'project-select';
    projectGroup.appendChild(projectLabel);
  let projectSelect = document.createElement('select');
    projectSelect.setAttribute('type','select');
    projectSelect.id = 'project-select';
    projectSelect.name = 'projectSelect';
    projectSelect.required = false;
    projectSelect.addEventListener('change', (e) => {
      if (projectSelect !== 'Default') {
        projectSelect.value = e.target.value;
      };
    });
    const projectSelectDefault = document.createElement('option');
      projectSelectDefault.value = 'Default';
      projectSelectDefault.textContent = '--Select Project--';
      projectSelect.appendChild(projectSelectDefault);
       projects.forEach((project) => {
        const projectOption = document.createElement('option');
        projectOption.value = project.id;
        projectOption.textContent = project.title;
        projectSelect.appendChild(projectOption);
      });
    projectLabel.appendChild(projectSelect);
    projectGroup.appendChild(projectLabel);


  const titleGroup = document.createElement('fieldset');
    titleGroup.className = 'titleGroup';

  const todoTitleLabel = document.createElement('label');
    todoTitleLabel.type = 'label';
    todoTitleLabel.textContent = 'Title: ';  
    todoTitleLabel.for = 'title';
  const todoTitle = document.createElement('input');
    todoTitle.type = 'text';
    todoTitle.maxlength = '45';
    todoTitle.setAttribute('id','title');  
    todoTitle.name = 'title';
    todoTitle.placeholder = 'Title';
    todoTitle.required = true;
    todoTitle.addEventListener('input', (e) => {
    todoTitle.value = e.target.value;
  });

  titleGroup.appendChild(todoTitleLabel);
  titleGroup.appendChild(todoTitle);


  const descriptionGroup = document.createElement('fieldset');
    descriptionGroup.className = 'descriptionGroup';

  const todoDescriptionLabel = document.createElement('label');
    todoDescriptionLabel.type = 'label';
    todoDescriptionLabel.for = 'description';
    todoDescriptionLabel.textContent = 'Description: ';
  const todoDescription = document.createElement('input');
    todoDescription.type = 'text';
    todoDescription.maxlength = '45';
    todoDescription.rows = '5';
    todoDescription.setAttribute('id','description');
    todoDescription.name = 'description';
    todoDescription.placeholder = 'Description';
    todoDescription.required = true;
    todoDescription.addEventListener('input', (e) => {
    todoDescription.value = e.target.value;
  });

  descriptionGroup.appendChild(todoDescriptionLabel);
  descriptionGroup.appendChild(todoDescription);
  
 
  const taskDiv = document.createElement('div');

  const todoTaskListLabel = document.createElement('label');
    todoTaskListLabel.type = 'label';
    todoTaskListLabel.for = 'taskList';
    todoTaskListLabel.textContent = 'Would you like to add a list of tasks? ';
  const todoTaskList = document.createElement('input');
    todoTaskList.type = 'checkbox';
    todoTaskList.id = 'taskList';
    todoTaskList.name = 'taskList';
    todoTaskList.value = 'unchecked';
    
  const hiddenTaskDiv = document.createElement('div');
    hiddenTaskDiv.id = 'hiddenTaskDiv';
    hiddenTaskDiv.style.display = 'none';
  const todoTaskLabel = document.createElement('label');
    todoTaskLabel.type = 'label';
    todoTaskLabel.for = 'task';
    todoTaskLabel.textContent = '( Use the plus sign button to add a task )';
  const todoTask = document.createElement('input');
    todoTask.type = 'button';
    todoTask.setAttribute('id','task');
    todoTask.name = 'task';
    todoTask.value = '+';

  hiddenTaskDiv.appendChild(todoTaskLabel);
  hiddenTaskDiv.appendChild(todoTask);  

  todoTask.addEventListener('click', () => {

    const inputDiv = document.createElement('div');
      inputDiv.className = 'inputDiv';
    const taskInput = document.createElement('input');
      taskInput.type = 'text';
      taskInput.className = 'taskInput';
      taskInput.setAttribute('id','taskInput');
      taskInput.placeholder = 'Enter a brief description of the task';
      taskInput.addEventListener('input', (e) => {
      taskInput.value = e.target.value;
    });

    const taskDelete = document.createElement('input');
      taskDelete.type = 'button';
      taskDelete.className = 'taskDelete';
      taskDelete.setAttribute('id','taskDelete');
      taskDelete.value = '-';
      
    taskDelete.addEventListener('click', ( e ) => {

      inputDiv.remove();

    });

    inputDiv.appendChild(taskInput);
    inputDiv.appendChild(taskDelete);
      
    hiddenTaskDiv.appendChild(inputDiv);

  });

  const todoTasklistGroup = document.createElement('fieldset');

  todoTaskList.addEventListener('change', () => {
    if (todoTaskList.checked) {
      todoTaskList.value = 'true';
      hiddenTaskDiv.style.display = 'flex';
      hiddenTaskDiv.style.flexDirection = 'column';
    } else {
      todoTaskList.value = 'false';
      hiddenTaskDiv.style.display = 'none';
      const children = hiddenTaskDiv.childNodes;
      while (children.length > 2){
        children[2].remove();
      } 
    }
  });

  taskDiv.appendChild(hiddenTaskDiv);

  todoTasklistGroup.appendChild(todoTaskListLabel);
  todoTasklistGroup.appendChild(todoTaskList);


  const dateGroup = document.createElement('fieldset');

  const todoDueDateLabel = document.createElement('label');
    todoDueDateLabel.type = 'label';
    todoDueDateLabel.textContent = 'Due Date: '
    todoDueDateLabel.for = 'dueDate';
  const todoDueDate = document.createElement('input');
    todoDueDate.type = 'date';
    todoDueDate.setAttribute('id','dueDate');
    todoDueDate.name = 'dueDate';
    todoDueDate.required = true;

  todoDueDate.addEventListener('change', (e) => {

    todoDueDate.value = e.target.value;

  });

  dateGroup.appendChild(todoDueDateLabel);
  dateGroup.appendChild(todoDueDate);


  const priorityGroup = document.createElement('fieldset');

  const todoPriorityLabel = document.createElement('label');
    todoPriorityLabel.type = 'label';
    todoPriorityLabel.textContent = 'Priority: ';
    todoPriorityLabel.for = 'priority';
  const todoPriority = document.createElement('select');
    todoPriority.setAttribute('id','priority');
    todoPriority.name = 'priority';
    todoPriority.required = false;
  const todoPriorityDefault = document.createElement('option');
    todoPriorityDefault.value = 'Default';
    todoPriorityDefault.textContent = '--Select Priority--';
  const todoPriorityLow = document.createElement('option');
    todoPriorityLow.value = 'Low';
    todoPriorityLow.textContent = 'Low';
  const todoPriorityMedium = document.createElement('option');
    todoPriorityMedium.value = 'Medium';
    todoPriorityMedium.textContent = 'Medium';
  const todoPriorityHigh = document.createElement('option');
    todoPriorityHigh.value = 'High';
    todoPriorityHigh.textContent = 'High';
    todoPriority.appendChild(todoPriorityDefault);
    todoPriority.appendChild(todoPriorityLow);
    todoPriority.appendChild(todoPriorityMedium);
    todoPriority.appendChild(todoPriorityHigh);

  todoPriority.addEventListener('change', (e) => {

    todoPriority.value = e.target.value;

  });

  priorityGroup.appendChild(todoPriorityLabel);
  priorityGroup.appendChild(todoPriority);

  // labeling required fields for user experience improvement. will use these
  // to add a red border and error message if the user tries to submit the form
  const requiredFields = [todoTitle, todoDescription, todoDueDate];

  for (let i = 0; i < requiredFields.length; i++) {
    const fieldGroup = requiredFields[i].parentNode;

    const required = document.createElement('span');
    required.className = 'required';
    required.textContent = '*';
    required.style.color = 'red';

    fieldGroup.appendChild(required);
  };


  const buttonGroup = document.createElement('fieldset');
    buttonGroup.className = 'buttonGroup';

  const todoSubmit = document.createElement('input');
    todoSubmit.type = 'submit';
    todoSubmit.setAttribute('id','submit');
    todoSubmit.value = 'Submit';

  todoSubmit.addEventListener('click', (e) => {
   
  // prevent submission via HTTP which would reload the page
    e.preventDefault();
    const taskInput = document.getElementsByClassName('taskInput');

      
      let id = randomBytes(16).toString('hex');
      let title = todoTitle.value;
      let description = todoDescription.value;
      let dueDate = todoDueDate.value;
      let taskList = {};
        taskList.type = 'unordered';
      taskList.items = [];
      
      if (taskInput) {
        const tasks = Array.from(taskInput);
        taskList.items.push(tasks.map( (task) => {
          return task.value;
        }));
      };
      let priority = todoPriority.value;

    if (title !== '' && description !== '' && dueDate !== '') {

      if (priority === 'Default') {
        priority = 'Low';
      } else {
        priority = todoPriority.value;
      }

      let projects = getProjects();
      let projectId = projectSelect.value;
      let project = getProject(projectId);
      let projectIndex = getProjectIndex(projectId);

      const newTodo = createTodo(
          id,
          project, 
          title, 
          description, 
          taskList, 
          dueDate,
          priority, 
          false
        );

      projects[projectIndex].todoList.push(newTodo);
      storage.setItem('projects', JSON.stringify(projects));

      todoModal.close();
      todoModalForm.reset();

      printPage(renderProject(projectId));

    } else {

    const reqFields = [todoTitle, todoDescription, todoDueDate];
      requiredFields.forEach( ( field ) => {

        if ( field.value === '' ) {
          field.classList.add('error');
          field.nextElementSibling.textContent = '* This field is required';

          setTimeout( () => {
            field.nextElementSibling.textContent = '*';
          }, 3000);

          field.addEventListener('focus', () => {
            if (field.classList.contains('error')) {
            field.classList.remove('error');
            field.nextElementSibling.textContent = '*';
            };
          });
        };  
      });

    return;

  }
    });

  const todoCancel = document.createElement('input');
    todoCancel.type = 'button';
    todoCancel.value = 'Cancel';
    todoCancel.setAttribute('id','cancel');
    todoCancel.addEventListener('click', () => {
      todoModalForm.reset();
      todoModal.close();
    });

  todoModalForm.appendChild(projectGroup);
  todoModalForm.appendChild(titleGroup);
  todoModalForm.appendChild(descriptionGroup);
  todoModalForm.appendChild(todoTasklistGroup);
  todoModalForm.appendChild(taskDiv);
  
  todoModalForm.appendChild(dateGroup);
  priorityGroup.appendChild(todoPriorityLabel);
  priorityGroup.appendChild(todoPriority);
  todoModalForm.appendChild(priorityGroup);
  buttonGroup.appendChild(todoSubmit);
  buttonGroup.appendChild(todoCancel);
  todoModalForm.appendChild(buttonGroup);

  
  todoModal.appendChild(todoModalForm);
  return todoModal;
};

// projectModal below. commenting for separation purposes
//
//
// yay projectModal

export const createProjectModal = () => {

  const storage = window.localStorage;
  
  let projectModal = document.createElement('dialog');
    projectModal.type = 'modal';
    projectModal.setAttribute('id','projectModal');

  let projectModalForm = document.createElement('form');
    projectModalForm.setAttribute('type','form');

  let modalHeading = document.createElement('h2');
    modalHeading.textContent = 'Add Project';

  projectModalForm.appendChild(modalHeading);

  let titleGroup = document.createElement('fieldset');
    titleGroup.className = 'titleGroup';

  let projectTitleLabel = document.createElement('label');
    projectTitleLabel.type = 'label';
    projectTitleLabel.textContent = 'Title: ';
    projectTitleLabel.for = 'title';
  let projectTitle = document.createElement('input');
    projectTitle.type = 'text';
    projectTitle.maxlength = '45';
    projectTitle.setAttribute('id','title');
    projectTitle.name = 'title';
    projectTitle.placeholder = 'Title';
    projectTitle.required = true;
    projectTitle.addEventListener('input', (e) => {
    projectTitle.value = e.target.value;
  });

  titleGroup.appendChild(projectTitleLabel);
  titleGroup.appendChild(projectTitle);

  let todoListDisclaimer = document.createElement('p');
    todoListDisclaimer.textContent = 'You can add todos to this project after creating it in the project dashboard.';

  let categoryGroup = document.createElement('fieldset');
    categoryGroup.className = 'categoryGroup';
  
  let projectCategoryLabel = document.createElement('label');
    projectCategoryLabel.type = 'label';
    projectCategoryLabel.textContent = 'Category: ';
    projectCategoryLabel.for = 'category';
  let projectCategory = document.createElement('select');
    projectCategory.setAttribute('id','category');
    projectCategory.name = 'category';
    projectCategory.required = false;

  let projectCategoryDefault = document.createElement('option');
    projectCategoryDefault.value = 'Default';
    projectCategoryDefault.textContent = '--Select Category--';
  let projectCategorySchool = document.createElement('option');
    projectCategorySchool.value = 'School';
    projectCategorySchool.textContent = 'School';
  let projectCategoryWork = document.createElement('option');
    projectCategoryWork.value = 'Work';
    projectCategoryWork.textContent = 'Work';
  let projectCategoryPersonal = document.createElement('option');
    projectCategoryPersonal.value = 'Personal';
    projectCategoryPersonal.textContent = 'Personal';

    projectCategory.appendChild(projectCategoryDefault);
    projectCategory.appendChild(projectCategorySchool);
    projectCategory.appendChild(projectCategoryWork);
    projectCategory.appendChild(projectCategoryPersonal);

  projectCategory.addEventListener('change', (e) => {
    projectCategory.value = e.target.value;
  });

  categoryGroup.appendChild(projectCategoryLabel);
  categoryGroup.appendChild(projectCategory);

  // labeling required fields for user experience improvement. will use these
  // to add a red border and error message if the user tries to submit the form
  const requiredFields = [projectTitle];

  requiredFields.forEach( ( field ) => {

    const fieldGroup = field.parentNode;

    const error = document.createElement('span');
    error.className = 'required';
    error.textContent = '*';

    fieldGroup.appendChild(error);
  });

  const buttonGroup = document.createElement('fieldset');
    buttonGroup.className = 'buttonGroup';

  const projectSubmit = document.createElement('input');
    projectSubmit.type = 'submit';
    projectSubmit.setAttribute('id','submit');
    projectSubmit.value = 'Submit';

  projectSubmit.addEventListener('click', (e) => {

    e.preventDefault();

    if (projectTitle !== ''){
      if (projectCategory.value === 'Default') {
        projectCategory.value = 'Misc.';
        categories.push(projectCategory.value);
      } else {
        projectCategory.value = projectCategory.value;
      }

      let id = randomBytes(16).toString('hex');
      let title = projectTitle.value;
      let todoList = [];
      let category = projectCategory.value;

      const newProject = createProject(
          id,
          title,
          todoList,
          category
        );

      const projects = getProjects();
      projects.push(newProject);

      storage.setItem('projects', JSON.stringify(projects));

      printPage(renderProject(id))
    } else {
      projectTitle.classList.add('error');
      projectTitle.nextElementSibling.textContent = '* This field is required';

      setTimeout( () => {
        projectTitle.nextElementSibling.textContent = '*';
      }, 3000);

      projectTitle.addEventListener('focus', () => {
        if (projectTitle.classList.contains('error')) {
          projectTitle.classList.remove('error');
          projectTitle.nextElementSibling.textContent = '*';
        };
      });
    }

    projectModal.close();
    projectModalForm.reset();

    });

  const projectCancel = document.createElement('input');
    projectCancel.type = 'button';
    projectCancel.value = 'Cancel';
    projectCancel.setAttribute('id','cancel');
    projectCancel.addEventListener('click', () => {
      projectModalForm.reset();
      projectModal.close();
    });

  buttonGroup.appendChild(projectSubmit);
  buttonGroup.appendChild(projectCancel);

  projectModalForm.appendChild(titleGroup);
  projectModalForm.appendChild(todoListDisclaimer);
  projectModalForm.appendChild(categoryGroup);
  projectModalForm.appendChild(buttonGroup);

  projectModal.appendChild(projectModalForm);

    return projectModal;
}
  





