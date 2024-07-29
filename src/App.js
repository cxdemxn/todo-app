// styles
import './styles/style.css'
import './styles/menu.css'
import './styles/list.css'

// components
import Dom from './components/Dom'
import Task from './components/Task'
import ListService from './components/ListService'


// utils
import pageLoad from './utils/pageLoad'





const newTask = new Task('title', 'some odd description', new Date());

document.addEventListener('DOMContentLoaded', () => {
    pageLoad();
    const listSection = new ListService();



    document.querySelector('.add-list').addEventListener('click', () => {
        const dom = new Dom();

        dom.addList(listSection);

        console.log(listSection.allLists()[listSection.size - 1]);

        dom.buildTaskView(listSection.allLists()[listSection.size - 1]);



    });



    document.querySelectorAll('#testTask').forEach(btn => {
        btn.addEventListener('click', () => {
            console.log('btn or bts')
        });
    });

    document.querySelectorAll('.task-check').forEach(btn => {
        btn.addEventListener('click', event => {
            event.stopPropagation();
            console.log('check or cheek');
        });
    })
});



