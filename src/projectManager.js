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
        

        const index = projectArray.findIndex(function (key) {
            return key.project === projectName;
        });

        projectArray.splice(index,1)

        localStorage.setItem('projectArray',JSON.stringify(projectArray))

        

    }

    const editProjectName = (projectName, newName) => {

        const projectArray = JSON.parse(localStorage.getItem('projectArray'))
        
        for (let object of projectArray) {
            if (object.project === projectName) {
                object.project = newName;
            }
        }

        localStorage.setItem('projectArray',JSON.stringify(projectArray))

    }

    const editProjectDescription = (projectName, newDescription) => {

        const projectArray = JSON.parse(localStorage.getItem('projectArray'))
        
        for (let object of projectArray) {
            if (object.project === projectName) {
                object.description = newDescription;
            }
        }

        localStorage.setItem('projectArray',JSON.stringify(projectArray))

    }

    



return { createProject, deleteProject, editProjectName, editProjectDescription }

}





export { projectManager }