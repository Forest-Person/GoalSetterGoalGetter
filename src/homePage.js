import { deleteProject, projectManager } from './projectManager'

function homePageRender() {

const projectStorage = JSON.parse(localStorage.getItem('projectArray'))

const project = new projectManager()

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

                <button > + </button>

            </div>

            
            <div class = 'projectsDiv'>
            
            </div>
            
            

        </main>

        `


content.insertAdjacentHTML('afterbegin', homePageString)


if (projectStorage !== null){

for(let obj of projectStorage){
    

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








export { homePageRender }