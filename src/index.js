import './style.css';
import { projectManager } from './projectManager';
import { todoManager } from './todoManager'

import { homePageRender } from './homePage';
import { addProjectPopupForm } from './AddProjectFormPopup.js'







const project = projectManager()

project.createProject('seeing paris','best trip in town')



const newTodo = todoManager()

newTodo.addTodo('seeing paris','best pooping', 'great view','12/14/1986','high')

homePageRender()






console.log(JSON.parse(localStorage.getItem('projectArray')))










