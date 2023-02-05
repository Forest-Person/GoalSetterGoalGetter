function editTodoName(projectObject,todoNameToEdit, newName){



 projectObject.todo.forEach((obj)=>{

    if(obj.nameOfTodo == todoNameToEdit){

        obj.nameOfTodo = newName
    }
 })   

    return projectObject

}

function editTodoDescription(projectObject,todoDescriptionToEdit,newDescription){

    projectObject.todo.forEach((obj)=>{

        if(obj.projectDescription == todoDescriptionToEdit){
    
            obj.nameOfTodo = newDescription
        }
     })   
    
        return projectObject


}










export { editTodoName, editTodoDescription}