import './style.css';
import { addProject } from './addProject';
import { addTodoItem } from './addTodo';
import { changeProjectName } from './editProjectName';
import { editTodoDescription, editTodoName } from './editTodoListValues';
import { deleteTodoItem } from './deleteTodoList';
import { homePageRender } from './homePage';

window.addEventListener("load", (event) => {
    homePageRender();
  });

const projectArray = []

const project1 = addProject('First Project','First of a series of projects')

projectArray.push(project1)

addTodoItem(project1,'todoOne','todo stuff is the name of the game')
addTodoItem(project1 ,"Farting",'Farting will be done asap')



changeProjectName(project1,'fartingNAME')



editTodoName(project1,"todoOne",'hello')

editTodoDescription(project1,'Farting will be done asap','Fart forever more')

deleteTodoItem(project1,'hello')
deleteTodoItem(project1, 'Farting')


console.log(project1)