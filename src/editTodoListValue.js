function editTodoListValue(projectName, itemToUpdate, newValue){  /////Still need to deal with updates to the date field

    const projectArray = JSON.parse(localStorage.getItem('projectArray'))

    const index = projectArray.findIndex(function (key) {
        return key.project === projectName;
    });

        console.log(projectArray[index].todo) //shows projectName object index

        for(let item of projectArray[index].todo){

            
               item[itemToUpdate] = newValue //only works because of brackets, brackets take variables.....
            

        }
    

    localStorage.setItem('projectArray',JSON.stringify(projectArray)) 




}



export { editTodoListValue }