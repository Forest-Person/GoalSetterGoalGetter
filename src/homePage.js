function homePageRender() {


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

        <aside class = 'addProject'>

            <button class = 'addProjectButton'>NEW</button>
        
        </aside>

        <main class = 'ProjectTodoContainer'>

            <h2> Projects </h2>

        </main>

        `


content.insertAdjacentHTML('afterbegin', homePageString)



}

export { homePageRender }