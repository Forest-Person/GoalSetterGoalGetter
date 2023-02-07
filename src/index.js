import './style.css';
import { projectManager } from './projectManager';
import { todoManager } from './todoManager'

import { homePageRender } from './homePage';



const todo = todoManager()
const project = projectManager()
project.createProject('play','playing')
project.createProject('pongpong','jongjong')
project.createProject('pongpong2','jongjong2')







console.log(JSON.parse(localStorage.getItem('projectArray')))










