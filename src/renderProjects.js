
import { deleteProject, projectManager } from './projectManager'


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
                        
                        <h6>Todo: ${item.title}</h6>
                        <button class = 'todoExpandButton' type = 'button' ></button>
                    
                    </div>

                    
                    <div class = 'todoInformation' data-todo-title-name = "${item.title}">

                        <p> What: ${item.description} </p>
                        <p> When: ${item.dueDate} </p>
                        <p> Priority: ${item.priority} </p>
                    </div>
                    
                
                
                </div>
                
                `
                const individualProjectRender = document.querySelector('.individualProjectContainer')
                individualProjectRender.insertAdjacentHTML('beforeend',todoItemHtmlString)
                 
                
                
            }
            
        }
        
        
    }
    
        
    
    const todoRender = document.querySelector('.projectsDiv')
    todoRender.addEventListener('click', (event)=>{


        if(event.target.className === 'todoExpandButton'){
            
           const targetDatasetProjectName = event.target.closest('.todoTitleAndExpandButton').dataset.todoTitleName
           const todoInformationtoHide = document.querySelector(`.todoInformation[data-todo-title-name = "${targetDatasetProjectName}"]`)
            todoInformationtoHide.style.cssText = "display:none"
           console.log(todoInformationtoHide)
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
    