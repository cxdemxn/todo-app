import Task from './Task';
import List from './List';
import TaskService from './TaskService';
import ListService from './ListService';

export default class {
    constructor() {
        this._listSection = new ListService();
        this._currentList = null;
        
    }

    addList = () => {
        const list = new List();
        list.name = prompt('Enter list name');
        list.color = prompt('enter list color');

        if (!(list.name && list.color)) {
            return;
        }

        
        this._listSection.addList(list);
        this.renderList(list);
        this.showTasks(list);
    }

    renderList = (list) => {
        const listBtn = document.createElement('button');
        listBtn.innerHTML = `<div>
                            <div class="list-color" style="background-color:${list.color};"></div>
                            <span class="section-list-text">${list.name}</span>
                        </div>
                        <span class="section-list-count show-number">${list.size}</span>`

        listBtn.addEventListener('click', () => {
            this.showTasks(list);
        })
        this._listSection.domID.appendChild(listBtn);
        console.log(listBtn);
    }

    showTasks = (list) => {
        this._currentList = list;
        
        const title = document.querySelector('.title');
        title.textContent = list.name;
        title.style.color = list.color;

        const taskCount = document.querySelector('.title-list-count');
        taskCount.textContent = list.size;

        const addTaskWrapper = document.querySelector('.add-task-wrapper');
        const addTaskBtn = document.createElement('button');
        addTaskBtn.classList.add('add-task-btn');
        addTaskBtn.innerHTML = `
            <svg class="add-icon"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
            <span>Add New Task</span>
        `

        addTaskBtn.addEventListener('click', () => {
            console.log(`add task btn was clicked in ${list.name}`);
        });

        addTaskWrapper.innerHTML = '';
        addTaskWrapper.appendChild(addTaskBtn);

        console.log('exited showTasks');
    }
}