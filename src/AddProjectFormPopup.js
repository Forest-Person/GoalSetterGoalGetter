
const addProjectPopupForm = () => {

    const addProjectButtonSection = document.querySelector('.addProjectButtonDiv')

    const addProjectFormHtmlString = `
    
        <div class = 'projectPopupFormContainer' >
            <form class = 'projectForm'>
    
                <div>

                    <h1>Add Project</h1>

                </div>
    
                
                <div class = 'addProjectInputs'>

                    <label for = 'nameOfProject'>Name: </label>
                    <input type = 'text' name = 'nameOfProject'>

                </div>

                <div class = 'addProjectInputs'>
                    
                    <label for = 'projectDescription'> Goal: </label>
                    <input type = 'text' name = 'projectDescription'>

                </div>

                <div class = 'projectFormButtons'>


                    <button>Add Project</button>
                    <button>Cancel</button>


                </div>
            </form>
        </div>

    `
                
    addProjectButtonSection.insertAdjacentHTML("afterbegin",addProjectFormHtmlString)

    
    
    
    
    
}

export { addProjectPopupForm }