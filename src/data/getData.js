export const getProjects = () => {
  const storage = window.localStorage;
  let projects = JSON.parse(storage.getItem('projects'));
  return projects;
};

export const getCategories = () => {
  let categories = ['Work', 'School', 'Personal'];
  return categories;
};

export const getTodos = (project) => {
  let todos = project.todoList;
  return todos;
};



  