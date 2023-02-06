const projectManager = () => {

    


    const createProject = (projectName, projectDescription) => {

        let projectArray 
    
        if(localStorage.getItem('projectArray') !== null)
        {projectArray = JSON.parse(localStorage.getItem('projectArray'))
        }else{projectArray = []}

    const projectObject = {
        
        project:projectName,description:projectDescription,todo:new Array()

    }
    projectArray.push(projectObject)

    localStorage.setItem('projectArray', JSON.stringify(projectArray))

    
    }

    const deleteProject = (projectName) => {

        
    
        
        const projectArray = JSON.parse(localStorage.getItem('projectArray'))
        

        const index = projectArray.indexOf((key)=>key.projectName)

        projectArray.splice(index,1)

        localStorage.setItem('projectArray',JSON.stringify(projectArray))

    }



return { createProject, deleteProject }

}





export { projectManager }