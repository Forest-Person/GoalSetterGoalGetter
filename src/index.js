import './style.css';
import { projectManager } from './projectManager';
import { addTodoItem } from './addTodo';
import { changeProjectName } from './editProjectName';
import { editTodoDescription, editTodoName } from './editTodoListValues';
import { deleteTodoItem } from './deleteTodoList';
import { homePageRender } from './homePage';




const project = projectManager()
project.createProject('play','playing')
project.createProject('pongpong','jongjong')
project.createProject('pongpong2','jongjong2')

console.log(JSON.parse(localStorage.getItem('projectArray')))


//project.deleteProject('anotherONE')

addTodoItem('pongpong','pooping','pooped every today','11/22/1989','high')

deleteTodoItem('pongpong','pooping')

addTodoItem('pongpong','pooped for the very first time','pooped every today','11/22/1989','high')

console.log(JSON.parse(localStorage.getItem('projectArray')))