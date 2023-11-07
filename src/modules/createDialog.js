import { createTodo, createProject } from './todos.js';
import { v4 as uuid } from 'uuid';
import { format } from 'date-fns';
import './createDialog.css';

import { homePage } from '../pages/home.js';
let currentView;

export const createDialog = (currentView) => {
  let storage = window.localStorage;
  let projects = JSON.parse(storage.getItem('projects'));


const todoModal = document.createElement('dialog');
  todoModal.type = 'modal';

  const todoModalForm = document.createElement('form');
  todoModalForm.type = 'form';

  // if (currentView === homePage) {
  
  //   let projectSelect = document.createElement('select');
  //   projectSelect.type = 'select';
  //   projectSelect.id = 'projectSelect';
  //   projectSelect.name = 'projectSelect';
  //   projectSelect.required = false;
  //   projectSelect.addEventListener('change', (e) => {
  //     if (projectSelect !== 'Default') {
  //       projectSelect = e.target.value;
  //       console.log(projectSelect)
  //     };
  //   });
  //   const projectSelectDefault = document.createElement('option');
  //     projectSelectDefault.value = 'Default';
  //     projectSelectDefault.textContent = '--Select Project--';
  //     projectSelect.appendChild(projectSelectDefault);
  //      projects.forEach((project) => {
  //       const projectOption = document.createElement('option');
  //       projectOption.value = project.id;
  //       projectOption.textContent = project.name;
  //       projectSelect.appendChild(projectOption);
  //     });
  //   }

  const titleGroup = document.createElement('formgroup');
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


  const descriptionGroup = document.createElement('formgroup');
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
    taskDelete.addEventListener('click', (e) => {
      inputDiv.remove();
    });
    inputDiv.appendChild(taskInput);
    inputDiv.appendChild(taskDelete);
      
    hiddenTaskDiv.appendChild(inputDiv);

  });
  const todoTasklistGroup = document.createElement('formgroup');

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

  


  const dateGroup = document.createElement('formgroup');

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
    // todoDueDate.value = e.target.value;
  });

  const priorityGroup = document.createElement('formgroup');

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

  const buttonGroup = document.createElement('formgroup');
    buttonGroup.className = 'buttonGroup';
    
    


  const todoSubmit = document.createElement('input');
    todoSubmit.type = 'submit';
    todoSubmit.setAttribute('id','submit');
    todoSubmit.value = 'Submit';


  todoSubmit.addEventListener('click', (e) => {
   
  // prevent submission via HTTP
    e.preventDefault();

      
      // Array.from(taskList).forEach((input) => {

      //   taskList.items.push(input.value);
      // });
      // console.log(taskList.items)
    


    let errors = document.querySelectorAll('.error');

    if (errors.length > 0) {
      errors.forEach((error) => {
        error.remove();
      });
    };
      let id = uuid();
      let title = todoTitle.value;
      let description = todoDescription.value;
      let dueDate =  () => todoDueDate.value !== 0 ? format(todoDueDate.value, 'MMM dd yyyy*', new Date()) : format(new Date(), 'MMM dd yyyy*', new Date());
      let taskList = {};
      taskList.type = 'unordered';
      taskList.items = Array.from(taskInput).map((input) => {
        return input.value;
      });
      let priority = todoPriority.value;

    if (title !== '' && description !== '' && dueDate !== '') {
      if (priority === 'Default') {
        priority = 'Low';
      } else {
        priority = todoPriority.value;
      }
      console.log(
        createTodo(
          id, 
          title, 
          description, 
          taskList, 
          dueDate,
          priority, 
          false));

      todoModal.close();
      todoModalForm.reset();

    } else {

    const reqFields = [todoTitle, todoDescription, todoDueDate];
    
      reqFields.forEach((field) => {
        if (field.value === '') {
        const reqFieldError = document.createElement('span');
          reqFieldError.className = 'error';
          reqFieldError.textContent = 'Required field';
          reqFieldError.style.color = 'red';
          reqFieldError.style.fontSize = '12px';
          field.style.border = '1px solid red';
          field.parentNode.appendChild(reqFieldError);
          field.addEventListener('focus', (e) => {
            e.target.style.border = '1px solid black';
            reqFieldError.textContent = null;
        });
      } 
    });
    return;

  }
    });
    
    // if (currentView === homePage) {
    //   if (Object.keys(projects.category).indexOf('Misc.') === undefined) {
    //     var answer = window.confirm('You have not selected an existing project. Continuing will create a new project called "Misc."');
    //     if (answer) {
    //       projects.push(createProject('Misc.', projects.id, projects.name, []));
    //     } else {
    //       return;
    //     }
    //   } else {
    //     projects.forEach((project) => {
    //       if (project.category === 'Misc.') {
    //         project.todoList.push

    

    
    //     });
    //   }
    // }});

  const todoCancel = document.createElement('input');
  todoCancel.type = 'button';
  todoCancel.value = 'Cancel';
  todoCancel.setAttribute('id','cancel');
  todoCancel.addEventListener('click', () => {
    todoModal.close();
  });
  titleGroup.appendChild(todoTitleLabel);
  titleGroup.appendChild(todoTitle);
  todoModalForm.appendChild(titleGroup);
  descriptionGroup.appendChild(todoDescriptionLabel);
  descriptionGroup.appendChild(todoDescription);
  todoModalForm.appendChild(descriptionGroup);
  todoTasklistGroup.appendChild(todoTaskListLabel);
  todoTasklistGroup.appendChild(todoTaskList);
  todoModalForm.appendChild(todoTasklistGroup);
  todoModalForm.appendChild(taskDiv);
  dateGroup.appendChild(todoDueDateLabel);
  dateGroup.appendChild(todoDueDate);
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
  





