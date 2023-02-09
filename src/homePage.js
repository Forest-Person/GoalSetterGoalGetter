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

            <div class = 'projectsDiv'>
            
            </div>
            
            

        </main>

        `


content.insertAdjacentHTML('afterbegin', homePageString)


for(let obj of projectStorage){
    if( obj.project){

        let projectName =  document.createElement('h3')
            projectName.textContent = obj.project

        let projectDescription = document.createElement('p')
            projectDescription.textContent = obj.description

        let indiviualProjectContainer = document.createElement('div')
            indiviualProjectContainer.classList.add('individualProjectContainer')
            indiviualProjectContainer.append(projectName,projectDescription)
      
        let projectDiv = document.querySelector('.projectsDiv')
      
      
        projectDiv.appendChild(indiviualProjectContainer)
    
    
    }

}

}

export { homePageRender }