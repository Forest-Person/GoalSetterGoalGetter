import { projectManager } from './projectManager'
import { homePageRender } from './homePage'

const addProjectPopupForm = () => {

    

    const project = projectManager()

    const addProjectButtonSection = document.querySelector('.addProjectButtonDiv')

    const addProjectFormHtmlString = `
    
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
                
    addProjectButtonSection.insertAdjacentHTML("afterbegin",addProjectFormHtmlString)

    
    
    const completeAddProject = document.querySelector('.addProjectButtonPressed')

    completeAddProject.addEventListener('click',()=>{


      const projectNameValue = document.querySelector('.addProjectInputValue').value

      const projectDescriptionValue = document.querySelector('.addProjectGoalValue').value

      project.createProject(projectNameValue,projectDescriptionValue)

       homePageRender()
      
        
    })
    
    
}

export { addProjectPopupForm }