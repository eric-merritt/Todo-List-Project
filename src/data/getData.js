export const getProjects = () => {
  const storage = window.localStorage;
  let projects = JSON.parse(storage.getItem('projects'));
  return projects;
};

export const getProject = (id) => {

  let projects = getProjects();
  
  let project = projects.find(project => project.id === id);
  return project;

}

export const getProjectIndex = (id) => {
  let projects = getProjects();
  let projectIndex = projects.findIndex(project => project.id === id);
  return projectIndex;
}

export const categories = ['Work', 'School', 'Personal'];

export const getCategories = () => {
  return categories;
};

export const getTodos = (project) => {
  let todos = project.todoList;
  return todos;
};

export const getProjectIndexByTodoId = (id) => {
  let projects = getProjects();
  for (const [index, project] of projects.entries()) {
    let todoIndex = project.todoList.findIndex(todo => todo.id === id);
    if (todoIndex !== -1) {
      return index;
    }
  }
}

export const getTodoIndex = (id) => {
  let projects = getProjects();
  let projectIndex = getProjectIndexByTodoId(id);
  let todoIndex = projects[projectIndex].todoList.findIndex(todo => todo.id === id);
  return todoIndex;
}




  