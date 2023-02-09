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
    

      const  htmlIndividualProjectString = `

<div class = 'individualProjectContainer'>



<div projectContainerButtonTitleContainer>

<div class = 'projectContainerButtons'>
<button > ... </button>
<button> - </button>
</div>

<h3>${obj.project}</h3>


</div>

<p>${obj.description}</p>

</div>



`

    
    
    const projectsDiv = document.querySelector('.projectsDiv')
    projectsDiv.insertAdjacentHTML('afterbegin', htmlIndividualProjectString)
}

}

export { homePageRender }