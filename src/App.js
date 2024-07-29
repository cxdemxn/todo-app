import './styles/style.css'
import './styles/menu.css'
import './styles/list.css'
import Task from './components/Task'
import pageLoad from './utils/pageLoad'

const newTask = new Task('title', 'some odd description', new Date());

document.addEventListener('DOMContentLoaded', () => {
    pageLoad();
    document.querySelector('.add-list').addEventListener('click', () => {
        const listName = prompt('enter list name');

        const listSection = document.querySelector('.add-to-list');
        const list = document.createElement('button');
        list.innerHTML = `<div>
                                    <div class="list-color"></div>
                                <span class="section-list-text">${listName}</span>
                                </div>
                                <span class="section-list-count show-number"></span>`

        listSection.appendChild(list);

        console.log('add btn clicked');
    })


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



