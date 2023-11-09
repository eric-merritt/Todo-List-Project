
export const createTodo = (id, title, description, taskList, dueDate, priority, completed) => {

  return {
    id: id,
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


