import './styles/style.css'
import './styles/menu.css'
import './styles/list.css'
import Task from './components/Task'
import pageLoad from './utils/pageLoad'

const newTask = new Task('title', 'some odd description', new Date());

document.addEventListener('DOMContentLoaded', () => {
    pageLoad();
});

document.querySelector('#testTask').addEventListener('click', () => {
    console.log('btn or bts')
});

document.querySelector('.taskCheck').addEventListener('click', event => {
    event.stopPropagation();
    console.log('check or cheek');
});