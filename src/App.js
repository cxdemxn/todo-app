// styles
import './styles/style.css'
import './styles/menu.css'
import './styles/list.css'
import './styles/media.css'

// components
import Task from './components/Task'
import TaskApp from './components/TaskApp'
import NewTaskApp from './components/NewTaskApp'
import ListService from './components/ListService'

// utils
import pageLoad from './utils/pageLoad'





const newTask = new Task('title', 'some odd description', new Date());

document.addEventListener('DOMContentLoaded', () => {

    pageLoad();

    // new TaskApp();
    new NewTaskApp();

    const testSection = JSON.parse(localStorage.getItem('lists'));

    console.log(String(Math.random() * 20).split('.').join(''))
});



