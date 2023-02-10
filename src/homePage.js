import { renderProjects } from "./renderProjects"

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

                <button class = 'addProjectButton' > + </button>

            </div>

            
            <div class = 'projectsDiv'>
            
            </div>
            
            

        </main>

        `


content.insertAdjacentHTML('afterbegin', homePageString)

renderProjects(projectStorage)
    
}








export { homePageRender }