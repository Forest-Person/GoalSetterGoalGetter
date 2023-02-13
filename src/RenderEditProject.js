const renderEditProjectForm = (projectName)=>{


    const projectWherePopupFormAppears = document.querySelector(`.individualProjectContainer[data-project-name =${projectName}]`)
    
    const projectEditFormPopupString = `
    
    
    <div class = 'projectPopupFormContainer' >
    <form class = 'projectForm'>
    
        <div>
    
            <h1>Add Project</h1>
    
        </div>
    
        
        <div class = 'addProjectInputs'>
    
            <label for = 'nameOfProject'>Name: </label>
            <input type = 'text' name = 'nameOfProject' class = 'addProjectInputValue' required>
    
        </div>
    
        <div class = 'addProjectInputs'>
            
            <label for = 'projectDescription'> Goal: </label>
            <input type = 'text' name = 'projectDescription' class = 'addProjectGoalValue' required>
    
        </div>
    
        <div class = 'projectFormButtons'>
    
    
            <button type = 'button' class = 'addProjectButtonPressed'>Add Project</button>
            <button type = 'button' class = 'cancelAddProjectButtonPressed'>Cancel</button>
    
    
        </div>
    </form>
    </div>
    
    `
    
    
    projectWherePopupFormAppears.insertAdjacentHTML('afterbegin',projectEditFormPopupString)
    
    
    
    
    
    }
    
    export { renderEditProjectForm }