import './style.css';
import { projectManager } from './projectManager';
import { addTodoItem } from './addTodo';
import { changeProjectName } from './editProjectName';
import { editTodoDescription, editTodoName } from './editTodoListValues';
import { deleteTodoItem } from './deleteTodoList';
import { homePageRender } from './homePage';



const project = projectManager()
project.createProject('play','playing')
project.createProject('anotherONE','doing it again')

console.log(JSON.parse(localStorage.getItem('projectArray')))


//project.deleteProject('anotherONE')
project.createProject('pongpong','jongjong')
project.createProject('pongpong2','jongjong2')
project.createProject('pongpong3','jongjong3')

project.deleteProject('pongpong')

console.log(JSON.parse(localStorage.getItem('projectArray')))