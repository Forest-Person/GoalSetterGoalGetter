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
project.editProjectListValues('pongpong','project','poopsplosion')




//project.deleteProject('anotherONE')







console.log(JSON.parse(localStorage.getItem('projectArray')))


