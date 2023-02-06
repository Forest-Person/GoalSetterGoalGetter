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



