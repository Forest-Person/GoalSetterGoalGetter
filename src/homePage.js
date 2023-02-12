import { renderProjects } from "./renderProjects"
import { addProjectPopupForm } from './AddProjectFormPopup'

function homePageRender() {

const projectStorage = JSON.parse(localStorage.getItem('projectArray'))

const content = document.querySelector('#content')

content.replaceChildren()

const homePageString = 
        
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


addProjectButton.addEventListener('click',()=> {


    

    const getProjectPopUpForm = document.querySelector('.projectPopupFormContainer')

    if(!getProjectPopUpForm){
    addProjectPopupForm()
    }

})

}








export { homePageRender }