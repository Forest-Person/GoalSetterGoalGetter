import { format } from "date-fns"

function addTodoItem(projectName, nameOfTodo, descriptionOfTodo, dueDate, priority)  {

    
    const dateDue =new Date(dueDate)
    const formattedDate = format(dateDue,'MM/dd/yyyy')  //using date-fns to format the date for a human readable format
    const projectArray = JSON.parse(localStorage.getItem('projectArray'))

    for(let item of projectArray){
        if (item.project === projectName){
             
            
            item.todo.push({'title':nameOfTodo,'description':descriptionOfTodo, 'dueDate':formattedDate, 'priority':priority})
        }

    }

    localStorage.setItem('projectArray',JSON.stringify(projectArray))

}
    


export { addTodoItem }