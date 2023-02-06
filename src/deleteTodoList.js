function deleteTodoItem(projectName, todoToDelete){

    
    const projectArray = JSON.parse(localStorage.getItem('projectArray'))

    for( let item of projectArray )   {

        if (item.project === projectName){

            for(let arrayItem in item.todo){
                if(arrayItem === todoToDelete){
                const index = item.todo.indexOf(todoToDelete)
                item.todo.splice(index,1)
            }
        }
    }
}

    localStorage.setItem(JSON.stringify(projectArray))



}


export { deleteTodoItem }