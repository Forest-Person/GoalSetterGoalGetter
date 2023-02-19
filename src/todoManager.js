import { format } from "date-fns"


const todoManager = () => {

const addTodo = (projectName, nameOfTodo, descriptionOfTodo, dueDate, priority) =>  {

    
    const dateDue =new Date(dueDate)
    const formattedDate = format(dateDue,'MM/dd/yyyy')  //using date-fns to format the date for a human readable format
    const projectArray = JSON.parse(localStorage.getItem('projectArray'))

    for(let item of projectArray){
        if (item.project === projectName){
             
            
            item.todo.push({'title':nameOfTodo,'description':descriptionOfTodo, 'dueDate':formattedDate, 'priority':priority,'status':false})
        }

    }

    localStorage.setItem('projectArray',JSON.stringify(projectArray))

}



const deleteTodo = (projectName, todoToDelete) => {

    
    const projectArray = JSON.parse(localStorage.getItem('projectArray'))

    for( let item of projectArray )   {

        if (item.project === projectName){
          const index = item.todo.indexOf(todoToDelete)
          item.todo.splice(index,1)
            
            }
        }
    


    localStorage.setItem('projectArray',JSON.stringify(projectArray))



}




const editTodoListValue = (projectName, itemToUpdate, newValue) => {  /////Still need to deal with updates to the date field

   

    if(itemToUpdate === 'dueDate'){

    const dateDue =new Date(newValue)
    const formattedDate = format(dateDue,'MM/dd/yyyy')  //using date-fns to format the date for a human readable format
    newValue = formattedDate
    }


    
    const projectArray = JSON.parse(localStorage.getItem('projectArray'))
    

    const index = projectArray.findIndex(function (key) {//finds index of the object in the array that contains the wanted project name
        return key.project === projectName;
    });

        

        for(let item of projectArray[index].todo){  //finds the todo list that is in the same object as the project name above.

            
               item[itemToUpdate] = newValue //only works because of brackets, brackets for objects can take variables and can be updated during program running. dot notation
            

        }
    

    localStorage.setItem('projectArray',JSON.stringify(projectArray)) 

}

const checkMarker = (projectName) => {

    const projectArray = JSON.parse(localStorage.getItem('projectArray'))

    for(let obj of projectArray){

            if(obj.project === projectName){

                
                    console.log(obj.todo)
                
            }
        
        
        

    }


}


return { addTodo, editTodoListValue, deleteTodo, checkMarker }
}


export { todoManager }