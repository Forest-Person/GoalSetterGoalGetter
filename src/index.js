import './style.css';
import { projectManager } from './projectManager';
import { addTodo } from './addTodo';
import { changeProjectName } from './editProjectName';
import { editTodoListValue } from './editTodoListValue';
import { deleteTodo } from './deleteTodo';
import { homePageRender } from './homePage';




const project = projectManager()
project.createProject('play','playing')
project.createProject('pongpong','jongjong')
project.createProject('pongpong2','jongjong2')




//project.deleteProject('anotherONE')

addTodo('pongpong','pooping','pooped every today','11/22/1989','high')

console.log(JSON.parse(localStorage.getItem('projectArray')))

editTodoListValue('pongpong','dueDate','11/22/1944')

console.log(JSON.parse(localStorage.getItem('projectArray')))


