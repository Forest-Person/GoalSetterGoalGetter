const renderEditProjectForm = (projectName)=>{


    const projectWherePopupFormAppears = document.querySelector(`.individualProjectContainer[data-project-name =${projectName}]`)
    
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
    
   


    
    
    
    }
    
    export { renderEditProjectForm }