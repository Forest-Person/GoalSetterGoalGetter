function deleteTodoItem(projectObject, todoToDelete){

    
    const index = projectObject.todo.findIndex((obj)=>
        
       obj[todoToDelete]

    )

        console.log(index)

        projectObject.todo.splice(-1,1)
    
}


export { deleteTodoItem }