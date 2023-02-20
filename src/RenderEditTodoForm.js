
const todoEditFormPopup = () => {

    const editTodoPopupFormContainer = document.querySelector('.editTodoDetails')


const addTodoFormHtmlString = `

        <div class = 'todoPopupFormContainer'>
            

                
                <h1>Add Todo</h1>
                

                
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
                            <button type = 'button' class = 'submitEditTodoButton'>Add Todo</button>
                            <button type = 'button' class = 'cancelEditTodoButton'>Cancel</button>
                        </div>

                    </form>
        </div>


    `


}


export { todoEditFormPopup }