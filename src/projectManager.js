const projectManager = () => {

    


    const createProject = (projectName, projectDescription) => {

        let projectArray 
    
        if(localStorage.getItem('projectArray') !== null)
        {projectArray = JSON.parse(localStorage.getItem('projectArray'))
        }else{projectArray = []}

    const projectObject = {
        
        project:projectName,description:projectDescription,todo:new Array()

    }

    for(let item of projectArray){

        if(item.project == projectObject.project ){alert('Please create unique project name.'); return }
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

   
    const editProjectListValues = (projectName, valueToEdit, newValue)=>{

        const projectArray = JSON.parse(localStorage.getItem('projectArray'))

        

            const index = projectArray.findIndex(function (key) {//finds index of the object in the array that contains the wanted project name
                return key.project === projectName;
            })
            console.log(projectArray[index])

            projectArray[index][valueToEdit] = newValue


            
            localStorage.setItem('projectArray',JSON.stringify(projectArray))

    }
    

    



return { createProject, deleteProject ,editProjectListValues}

}





export { projectManager }