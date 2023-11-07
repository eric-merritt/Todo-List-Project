export const getProjects = () => {
  const storage = window.localStorage;
  let projects = JSON.parse(storage.getItem('projects'));
  return projects;
};

export const getCategories = () => {
  let categories = ['Work', 'School', 'Personal'];
  return categories;
};

export const getProject = (obj, parentNode) => {
    let project;
    for (let key in obj) {
      if (typeof obj[key] === 'object') {
        if (key === name) {
          project = obj[key];
          break;
        } else {
          recurseObj(obj[key], key);
        }
      }
      return project;
    }
  };

export const getTodos = (project) => {
  let todos = project.todos;
  return todos;
};



  