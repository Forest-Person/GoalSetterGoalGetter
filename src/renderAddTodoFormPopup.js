import { projectManager } from "./projectManager"
import { homePageRender } from "./homePage"
import { todoManager } from "./todoManager"



const addTodoPopupForm = (projectName)=> {

    const todo = todoManager()
    
    const todoPopupFormContainer = document.querySelector(`.individualProjectContainer[data-project-name ='${projectName}']`)

    const addTodoFormHtmlString = `

        <div class = 'todoPopupFormContainer'>
            

                
                <h1>Add Todo</h1>
                

                
                    <form class = 'todoForm'>
                        <div>
                            <label for = 'todoName'>Todo Name:</label>
                            <input type = 'text' name = 'todoName' class = 'todoName'>
                        </div>

                        <div>
                            <label for = "todoDescription">Description:</label>
                            <input type = "text" name = 'todoDescription' class = 'todoDescription'>
                        </div>

                        <div>
                            <label for = "dueDateOfTodo">Due Date:</label>
                            <input type = "date" name = 'dueDateOfTodo' class = 'todoDueDate'>
                        </div>

                        <div>
                            <label for = "todoPriority">Priority:</label>
                            <select name = "todoPriority" class = 'todoPrioritySelection'>
                                <option value = 'low'>Low</option>
                                <option value = 'medium'>Medium</option>
                                <option value = 'high'>High</option>
                            </select>
                        </div>

                        <div>
                            <button type = 'button' class = 'submitTodoButton'>Add Todo</button>
                            <button type = 'button' class = 'cancelAddTodoButton'>Cancel</button>
                        </div>

                    </form>
        </div>


    `
todoPopupFormContainer.insertAdjacentHTML('afterbegin',addTodoFormHtmlString)


const todoPopupFormContainerDiv = document.querySelector('.todoPopupFormContainer')

todoPopupFormContainerDiv.addEventListener('click', (event)=> {

    if(event.target.className === 'cancelAddTodoButton'){

        todoPopupFormContainer.removeChild(todoPopupFormContainerDiv)
    }

    else if (event.target.className === 'submitTodoButton'){
        //(projectName, nameOfTodo, descriptionOfTodo, dueDate, priority)
        const todoName = document.querySelector('.todoName').value
        const todoDescription = document.querySelector('.todoDescription').value
        const todoDueDate = document.querySelector('.todoDueDate').value
        const todoPriority = document.querySelector('.todoPrioritySelection').value

        todo.addTodo(projectName,todoName,todoDescription,todoDueDate,todoPriority)
        todoPopupFormContainer.removeChild(todoPopupFormContainerDiv)
        homePageRender()

    }



})


}

export { addTodoPopupForm }