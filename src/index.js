import './style.css';
import { projectManager } from './projectManager';
import { todoManager } from './todoManager'

import { homePageRender } from './homePage';








const project = new projectManager()

project.createProject('seeing paris','best trip in town')



const newTodo = new todoManager()

newTodo.addTodo('seeing paris','best pooping', 'great view','12/14/1986','high')

homePageRender()


console.log(JSON.parse(localStorage.getItem('projectArray')))










