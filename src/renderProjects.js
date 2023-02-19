
import { deleteProject, projectManager } from './projectManager'
import { checkMarker } from './Checkmarker'
import { homePageRender } from './homePage'


const renderProjects = (storage) => {
    

    const project = projectManager()
    
   

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
                
                <div class = 'todoRenderDiv'  >
                
                    <div class = 'todoTitleAndExpandButton' data-todo-title-name = "${item.title}">
                        
                    <div class = 'todoButtons'>
                        <button class = 'todoExpandButton' type = 'button' ></button>
                        <button class = 'todoDeleteButton'></button>
                        <input class = 'todoCheckBox' type = "checkbox" data-todo-title-name = "${item.title}" >
                    </div>
                    
                        
                        <p>Todo: ${item.title}</p>
                        <p>Due: ${item.dueDate} </p>
                        
                        
                    
                    </div>

                    
                    <div class = 'todoInformation' data-todo-title-name = "${item.title}" style = 'display:none;'>
                        
                        <button class = 'editTodoDetails'></button>
                        <p> What: ${item.description} </p>
                        
                        <p> Priority: ${item.priority} </p>
                    </div>
                    
                
                
                </div>
                
                `
                const individualProjectRender = document.querySelector('.individualProjectContainer')
                individualProjectRender.insertAdjacentHTML('beforeend',todoItemHtmlString)
                const todoCheck = document.querySelector(`.todoCheckBox[data-todo-title-name = "${item.title}"]`)
                todoCheck.checked = item.status
                
                
                
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

            
        })

        

       
        
        

    }

    export { renderProjects }
    