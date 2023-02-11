import { deleteProject, projectManager } from './projectManager'


const renderProjects = (storage) => {
    

    const project = projectManager()
    //projectsDiv.replaceChildren()

if (storage !== null){

    for(let obj of storage){
        
    
          const  htmlIndividualProjectString = `
    
                <div class = 'individualProjectContainer' data-project-name = ${obj.project}>
                <div class = 'projectContainerButtons'>
                <button class = 'editButton' title = 'Edit Project'>...</button>
                <button class = 'deleteButton' title = 'Delete Project'>-</button>
            </div>
                <div>
    
                
    
                <h3>${obj.project}</h3>
    
    
                </div>
    
                <p>${obj.description}</p>
    
                </div>
    
                `
    
        
                const projectsDiv = document.querySelector('.projectsDiv')
                projectsDiv.insertAdjacentHTML('afterbegin', htmlIndividualProjectString)
        }
    }
    
        
    
        const projectsDiv = document.querySelector('.projectsDiv') //Event delegation on the projects div element to click on delete button removes the project
        projectsDiv.addEventListener('click', (event)=>{
    
            if (event.target.className === 'deleteButton'){
                
                
                const nearestProjectParentContainer = event.target.parentElement.closest('.individualProjectContainer')
                const projectNameOfContainer = nearestProjectParentContainer.dataset.projectName
                project.deleteProject(projectNameOfContainer)
                nearestProjectParentContainer.remove()
            }
        })
        

    }

    export { renderProjects }
    