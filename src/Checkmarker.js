import { todoManager } from "./todoManager";
import { homePageRender } from "./homePage";


const checkMarker = (projectName, todoName) => {

    
    const modifyCheckBoxCheck = document.querySelector(`.todoCheckBox[data-todo-title-name = '${todoName}']`)
        

    const projectArray = JSON.parse(localStorage.getItem('projectArray'))

    if(projectArray !== null){

    const index = projectArray.findIndex((key)=>{return key.project === projectName})

   

        
       const todoIndex =  projectArray[index].todo.findIndex((key)=>{return key.title === todoName})
    
       
   if(projectArray[index].todo[todoIndex].status === false){ //change checkbox values true or falce checked or not checked depending on value of todo.status
    projectArray[index].todo[todoIndex].status = true
    modifyCheckBoxCheck.checked = true
    const nearestTodoDiv = document.querySelectorAll(`.todoRenderDiv[data-todo-title-name = "${todoName}"] p`)
    
    nearestTodoDiv.forEach((item) => {item.style.cssText = "text-decoration:line-through; text-decoration-thickness:4px;"})
    
   }else if(projectArray[index].todo[todoIndex].status === true){

    projectArray[index].todo[todoIndex].status = false
   modifyCheckBoxCheck.checked = false
   const nearestTodoDiv = document.querySelectorAll(`.todoRenderDiv[data-todo-title-name = "${todoName}"] p`)
    
   nearestTodoDiv.forEach((item) => {item.style.cssText = "text-decoration:none; "})

   }
   
       
     
        
    }

    

    localStorage.setItem('projectArray',JSON.stringify(projectArray))

}




export { checkMarker }