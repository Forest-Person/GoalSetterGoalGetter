import { projectManager } from "./projectManager"

import { homePageRender } from "./homePage"

const renderEditProjectForm = (projectName)=>{

    const project = projectManager()

    const projectWherePopupFormAppears = document.querySelector(`.individualProjectContainer[data-project-name ='${projectName}']`)
    
    const projectEditFormPopupString = `
    
    
    <div class = 'editProjectPopupFormContainer' >
    <form class = 'editProjectForm'>
    
        <div class = 'editProjectHeader'>
    
            <h3>Edit Project</h3>
    
        </div>
    
        
        <div class = 'editProjectInputs'>
    
            <label for = 'nameOfProject'>Name: </label>
            <input type = 'text' name = 'nameOfProject' class = 'editProjectInputValue' required>
    
        </div>
    
        <div class = 'editProjectInputs'>
            
            <label for = 'projectDescription'> Goal: </label>
            <input type = 'text' name = 'projectDescription' class = 'editProjectGoalValue' required>
    
        </div>
    
        <div class = 'editProjectFormButtons'>
    
    
            <button type = 'button' class = 'editProjectButtonPressed'>Edit Project</button>
            <button type = 'button' class = 'editCancelAddProjectButtonPressed'>Cancel</button>
    
    
        </div>
    </form>
    </div>
    
    `
    
    
    projectWherePopupFormAppears.insertAdjacentHTML('afterbegin',projectEditFormPopupString)
    
   projectWherePopupFormAppears.addEventListener('click',(event)=> {

    

    if(event.target.className === 'editProjectButtonPressed'){

        const editProjectNameFormButtons =  document.querySelector('.editProjectInputValue').value
    const editProjectDescription =  document.querySelector('.editProjectGoalValue').value
        const newProjectName = editProjectNameFormButtons

        project.editProjectListValues(projectName,'project',editProjectNameFormButtons)

        project.editProjectListValues(newProjectName,'description',editProjectDescription)


    


        homePageRender()
    }

    if (event.target.className === 'editCancelAddProjectButtonPressed'){

        projectWherePopupFormAppears.removeChild(document.querySelector('.editProjectPopupFormContainer'))
        homePageRender()
    }
   })


    
    
    
    }

    

    export { renderEditProjectForm }