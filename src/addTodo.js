function addTodoItem(project,nameOfTodo, descriptionOfTodo)  {

    const todoToAdd = {
        'nameOfTodo':nameOfTodo,
        'projectDescription':descriptionOfTodo
    }
   
   
    project.todo.push(todoToAdd)
    
    

  

    return {project, nameOfTodo, descriptionOfTodo}

}


export { addTodoItem }