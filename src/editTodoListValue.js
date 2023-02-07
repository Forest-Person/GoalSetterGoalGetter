import { format } from "date-fns"


function editTodoListValue(projectName, itemToUpdate, newValue){  /////Still need to deal with updates to the date field

   

    if(itemToUpdate === 'dueDate'){

    const dateDue =new Date(newValue)
    const formattedDate = format(dateDue,'MM/dd/yyyy')  //using date-fns to format the date for a human readable format
    newValue = formattedDate
    }


    
    const projectArray = JSON.parse(localStorage.getItem('projectArray'))

    const index = projectArray.findIndex(function (key) {//finds index of the object in the array that contains the wanted project name
        return key.project === projectName;
    });

        console.log(projectArray[index].todo) //shows projectName object index

        for(let item of projectArray[index].todo){  //finds the todo list that is in the same object as the project name above.

            
               item[itemToUpdate] = newValue //only works because of brackets, brackets for objects can take variables and can be updated during program running. dot notation
            

        }
    

    localStorage.setItem('projectArray',JSON.stringify(projectArray)) 




}



export { editTodoListValue }