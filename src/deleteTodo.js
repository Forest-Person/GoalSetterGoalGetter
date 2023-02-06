function deleteTodo(projectName, todoToDelete){

    
    const projectArray = JSON.parse(localStorage.getItem('projectArray'))

    for( let item of projectArray )   {

        if (item.project === projectName){
          const index = item.todo.indexOf(todoToDelete)
          item.todo.splice(index,1)
            
            }
        }
    


    localStorage.setItem('projectArray',JSON.stringify(projectArray))



}


export { deleteTodo }