
import { deleteProject, projectManager } from './projectManager'
import { checkMarker } from './Checkmarker'
import { homePageRender } from './homePage'
import { todoEditFormPopup } from './RenderEditTodoForm'
import { todoManager } from './todoManager'


const renderProjects = (storage) => {
    

    const project = projectManager()
    const todo = todoManager()
   

if (storage !== null){

    for(let obj of storage){
        
    
          const  htmlIndividualProjectString = `
    
            <div class = 'individualProjectContainer' data-project-name = "${obj.project}">
                
            <div class = 'projectContainerButtons'>
                    <button class = 'addTodoButton' title = 'Add todo'></button>
                    <button class = 'editButton' title = 'Edit Project'></button>
                    <button class = 'deleteButton' title = 'Delete Project'></button>
                </div>    
                
            
            <div>
    
                    <h3>${obj.project}</h3>
                    <p>${obj.description}</p>
                </div>
    
                    

                
    
            </div>
    
                `
    
        
                const projectsDiv = document.querySelector('.projectsDiv')
                projectsDiv.insertAdjacentHTML('afterbegin', htmlIndividualProjectString)

                

            for(let item of obj.todo){


                const todoItemHtmlString = `
                
                <div class = "todoRenderDiv" data-todo-title-name = "${item.title}"  >
                
                    <div class = 'todoTitleAndExpandButton' data-todo-title-name = "${item.title}">
                        
                    <div class = 'todoButtons'>
                        <button class = 'todoExpandButton' type = 'button' ></button>
                        <button class = 'todoDeleteButton'></button>
                        <input class = 'todoCheckBox' type = "checkbox" data-todo-title-name = "${item.title}" >
                    </div>
                    
                        
                        <p>Todo: ${item.title}</p>
                        <p>Due: ${item.dueDate} </p>
                        
                        <button class = 'editTodoDetails'></button>
                    
                    </div>

                    
                    <div class = 'todoInformation' data-todo-title-name = "${item.title}" style = 'display:none;'>
                        
                        
                        <p> What: ${item.description} </p>
                        
                        <p> Priority: ${item.priority} </p>
                        
                    </div>
                    
                
                
                </div>
                
                `
                const individualProjectRender = document.querySelector('.individualProjectContainer')
                individualProjectRender.insertAdjacentHTML('beforeend',todoItemHtmlString)
                const todoCheck = document.querySelector(`.todoCheckBox[data-todo-title-name = "${item.title}"]`)
                todoCheck.checked = item.status //make the checkbox checked based on value of status as true or false
                
                if (todoCheck.checked === true){
                    
                    const nearestTodoDiv = document.querySelectorAll(`.todoRenderDiv[data-todo-title-name = "${item.title}"] p`)
    
                    nearestTodoDiv.forEach((item) => {item.style.cssText = "text-decoration:line-through; text-decoration-thickness:4px;"})}
                
                if(todoCheck.checked === false){
                    
                    const nearestTodoDiv = document.querySelectorAll(`.todoRenderDiv[data-todo-title-name = "${item.title}"] p`)
    
                    nearestTodoDiv.forEach((item) => {item.style.cssText = "text-decoration:none;"})



                }
                
                
                
            }
            
        }
        
        
    }


    
    const todoRender = document.querySelector('.projectsDiv')
    todoRender.addEventListener('click', (event)=>{


        if(event.target.className === 'todoExpandButton'){
            
           const targetDatasetProjectName = event.target.closest('.todoTitleAndExpandButton').dataset.todoTitleName
           
           const todoInformationtoHide = document.querySelector(`.todoInformation[data-todo-title-name = "${targetDatasetProjectName}"]`)
            if(todoInformationtoHide.style.display !== 'none'){
                todoInformationtoHide.style.display = 'none'
            }else if(todoInformationtoHide.style.display !== 'block'){
                todoInformationtoHide.style.display = 'block'
            }
           
        }

        })

        const projectsDiv = document.querySelector('.projectsDiv') //Event delegation on the projects div element to click on delete button removes the project
        projectsDiv.addEventListener('click', (event)=>{
    
            if (event.target.className === 'deleteButton'){
                
                const response = confirm('Delete Project?')
                if(response === false){return}
                
                const nearestProjectParentContainer = event.target.parentElement.closest('.individualProjectContainer')
                const projectNameOfContainer = nearestProjectParentContainer.dataset.projectName
                project.deleteProject(projectNameOfContainer)
                nearestProjectParentContainer.remove()
            }

            if (event.target.className === 'editTodoDetails'){//gets proper todoInformation div to add popup to and calls todoeditpopup


                const nearestTodoParentContainer = event.target.closest('.todoTitleAndExpandButton')
                const nearestDatasetTitle = nearestTodoParentContainer.dataset.todoTitleName
                
                
                todoEditFormPopup(nearestDatasetTitle)
              }
            if(event.target.className === 'cancelEditTodoButton'){
              const nearestProjectParentContainer = event.target.closest('.todoRenderDiv')
              const todoFormToRemove = document.querySelector('.todoPopupFormContainer')
              nearestProjectParentContainer.removeChild(todoFormToRemove)
            
            }

            if(event.target.className === 'todoDeleteButton'){

                if(!null){
                    confirm("Delete this todo?")
                    const nearestProjectNameData = event.target.closest(".individualProjectContainer").dataset.projectName
                    const nearestTitleData = event.target.closest('.todoRenderDiv').dataset.todoTitleName   
                    todo.deleteTodo(nearestProjectNameData,nearestTitleData)
                    homePageRender()


                }
                
            }
            
        })

        

       
        
        

    }

    export { renderProjects }
    