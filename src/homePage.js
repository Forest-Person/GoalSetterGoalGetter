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

                <li><span> View Projects</span> </li>

                </ul>

            </span></nav>

        

        <main class = 'projectTodoContainer'>

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