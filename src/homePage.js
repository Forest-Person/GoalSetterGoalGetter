import { renderProjects } from "./renderProjects"
import { addProjectPopupForm } from './AddProjectFormPopup'
import { renderEditProjectForm } from './RenderEditProject'

function homePageRender() {

const projectStorage = JSON.parse(localStorage.getItem('projectArray')) 

const content = document.querySelector('#content')

content.replaceChildren()

const homePageString =  //String which will be used with addAdjacentHTML to render the home page.
        
        `

        <header class = 'header'>
            
            <h1 class = 'headerTitle'> Goal Setter Goal Getter </h1>

        </header>

            <nav class = 'navigationMenu'>

                <span><ul>

                <li> <span> View Projects </span> </li>

                </ul>

            </span></nav>

        

        <main class = 'projectTodoContainer'>

            

            <h2> <span>  Projects  </span> </h2>

            <div class = 'addProjectButtonDiv'>

                <button class = 'addProjectButton' title = 'Add Project' >  </button>

            </div>

            
            <div class = 'projectsDiv'>
            
            </div>
            
            

        </main>

        `


content.insertAdjacentHTML('afterbegin', homePageString)

renderProjects(projectStorage)

const addProjectButton = document.querySelector('.addProjectButton') ///add event listener to plus sign add project button to bring up add project form.


addProjectButton.addEventListener('click',()=> { //render add project popup form


    const getProjectPopUpForm = document.querySelector('.projectPopupFormContainer')

    if(!getProjectPopUpForm){
    addProjectPopupForm()
    }

})

const projectsContainer = document.querySelector('.projectsDiv')

projectsContainer.addEventListener('click', (event)=>{

    

    const targetDatasetName = event.target.closest('.individualProjectContainer').dataset.projectName  //gets project name of chosen individualprojectContainer

    if(event.target.className === 'editButton'){

    renderEditProjectForm(targetDatasetName)
    }



})




}








export { homePageRender }