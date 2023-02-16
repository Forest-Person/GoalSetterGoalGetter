import { projectManager } from "./projectManager"
import { homePageRender } from "./homePage"



const addTodoPopupForm = (projectName)=> {

    const todoPopupFormContainer = document.querySelector(`.individualProjectContainer[data-project-name ='${projectName}']`)

    const addTodoFormHtmlString = `

        <div class = 'todoPopupFormContainer'>
            

                
                <h1>Add Todo</h1>
                

                
                    <form class = 'todoForm'>
                        <div>
                            <label for = 'todoName'>To do:</label>
                            <input type = 'text' name = 'todoName'>
                        </div>

                        <div>
                            <label for = "todoDescription">Description:</label>
                            <input type = "text" name = 'todoDescription'>
                        </div>

                        <div>
                            <label for = "dueDateOfTodo">Due Date:</label>
                            <input type = "date" name = 'dueDateOfTodo'>
                        </div>

                        <div>
                            <label for = "todoPriority">Priority:</label>
                            <select name = "todoPriority">
                                <option value = 'low'>Low</option>
                                <option value = 'medium'>Medium</option>
                                <option value = 'high'>High</option>
                            </select>
                        </div>

                        <div>
                            <button type = 'button'>Add Todo</button>
                            <button type = 'button'>Cancel</button>
                        </div>

                    </form>
        </div>


    `
todoPopupFormContainer.insertAdjacentHTML('afterbegin',addTodoFormHtmlString)



}

export { addTodoPopupForm }