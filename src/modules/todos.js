
export const createTodo = (id, project, title, description, taskList, dueDate, priority) => {

  return {
    id: id,    
    project: project,
    title: title,
    description: description,
    taskList,
    dueDate: new Date(dueDate),
    priority: priority,
    completed: false,
  } 
}

export const createProject = ( id, title, todos, category ) => {
  
  return {
    id: id,
    title: title,
    todoList: todos,
    category,
  }
}


