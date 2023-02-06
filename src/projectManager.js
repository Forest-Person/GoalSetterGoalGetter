const projectManager = () => {

    let projectArray
    
    if(localStorage.getItem('projectArray') !== null)
    {projectArray = JSON.parse(localStorage.getItem('projectArray'))
    }else{projectArray = []}


    const createProject = (projectName, projectDescription) => {

    const projectObject = {
        
        project:projectName,description:projectDescription,todo:new Array()

    }
    projectArray.push(projectObject)

    localStorage.setItem('projectArray', JSON.stringify(projectArray))

    

    }



return { createProject }

}





export { projectManager }