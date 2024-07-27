import './styles/style.css'
import './styles/menu.css'
import Task from './components/Task'
import pageLoad from './utils/pageLoad'

const newTask = new Task('title', 'some odd description', new Date());

document.addEventListener('DOMContentLoaded', () => {
    pageLoad();
});