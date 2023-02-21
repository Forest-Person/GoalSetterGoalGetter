
const todoEditFormPopup = (todoDatasetTitle) => {

    const editTodoPopupFormContainer = document.querySelector(`.todoInformation[data-todo-title-name = "${todoDatasetTitle}"]`)
    
    if (editTodoPopupFormContainer === null){return}


const addTodoFormHtmlString = `

        <div class = 'todoPopupFormContainer'>
            

                
                <p style = "font-size:2rem; border-bottom:2px solid black;">Edit Todo</p>
                

                
                    <form class = 'editTodoPopupForm'>
                        <div>
                            <label for = 'editTodoName'>Todo Name:</label>
                            <input type = 'text' name = 'editTodoName' class = 'todoName'>
                        </div>

                        <div>
                            <label for = "editTodoDescription">Description:</label>
                            <input type = "text" name = 'editTodoDescription' class = 'todoDescription'>
                        </div>

                        <div>
                            <label for = "editDueDateOfTodo">Due Date:</label>
                            <input type = "date" name = 'editDueDateOfTodo' class = 'todoDueDate'>
                        </div>

                        <div>
                            <label for = "editTodoPriority">Priority:</label>
                            <select name = "editTodoPriority" class = 'todoPrioritySelection'>
                                <option value = 'low'>Low</option>
                                <option value = 'medium'>Medium</option>
                                <option value = 'high'>High</option>
                            </select>
                        </div>

                        <div>
                            <button type = 'button' class = 'submitEditTodoButton'>Edit Todo</button>
                            <button type = 'button' class = 'cancelEditTodoButton'>Cancel</button>
                        </div>

                    </form>
        </div>


    `
    if(document.querySelector('.todoPopupFormContainer')) { return
    }else {editTodoPopupFormContainer.insertAdjacentHTML("afterend",addTodoFormHtmlString)}
        


    
    

}




export { todoEditFormPopup }