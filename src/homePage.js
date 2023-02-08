function homePageRender() {

const projectStorage = JSON.parse(localStorage.getItem('projectArray'))



const content = document.querySelector('#content')

content.replaceChildren()

const homePageString = 
        `

        <header class = 'headerTitle'>
            
            <h1> Goal Setter Goal Getter </h1>

        </header>

            <nav class = 'navigationMenu'>

                <ul>

                <li> View Projects </li>

                </ul>

            </nav>

        

        <main class = 'ProjectTodoContainer'>

            <h2> Projects </h2>

            <div id = 'projectDiv'>
            
            </div>
            
            

        </main>

        `


content.insertAdjacentHTML('afterbegin', homePageString)


for(let obj of projectStorage){
    if( obj.project){

      let newElement =  document.createElement('p')
        newElement.textContent ='Project Name: ' + obj.project
      let projectDiv = document.querySelector('#projectDiv')
      projectDiv.appendChild(newElement)}

}

}

export { homePageRender }