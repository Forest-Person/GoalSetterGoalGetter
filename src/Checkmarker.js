import { todoManager } from "./todoManager";
import { homePageRender } from "./homePage";


const checkMarker = (projectName, todoName) => {


    const projectArray = JSON.parse(localStorage.getItem('projectArray'))

    if(projectArray !== null){

    const index = projectArray.findIndex((key)=>{return key.project === projectName})

   

        
       const todoIndex =  projectArray[index].todo.findIndex((key)=>{return key.title === todoName})
    
       
   if(projectArray[index].todo[todoIndex].status === false){
    projectArray[index].todo[todoIndex].status = true

   }else if(projectArray[index].todo[todoIndex].status === true){

    projectArray[index].todo[todoIndex].status = false

   }
    
     console.log(projectArray[index].todo[todoIndex].status)   
     console.log(projectArray[index].todo)
        
    }

    

    localStorage.setItem('projectArray',JSON.stringify(projectArray))

}




export { checkMarker }