// styles
import './styles/style.css'
import './styles/menu.css'
import './styles/list.css'

// components
import Dom from './components/Dom'
import List from './components/List'
import Task from './components/Task'
import TaskApp from './components/TaskApp'
import ListService from './components/ListService'

// utils
import pageLoad from './utils/pageLoad'





const newTask = new Task('title', 'some odd description', new Date());

document.addEventListener('DOMContentLoaded', () => {
    pageLoad();
    const dom = new Dom();
    const taskApp = new TaskApp();
    const listSection = new ListService();

    const testSection = JSON.parse(localStorage.getItem('lists'));
    // console.log(testSection);

    // document.querySelector('.add-list').addEventListener('click', () => {
    //     // const list = new List();
    //     // list.name = prompt('enter name');
    //     // list.color = prompt('enter color');

    //     // dom.addList(list);
    //     // listSection.addList(list);
    //     taskApp.addList();

    // });
});



