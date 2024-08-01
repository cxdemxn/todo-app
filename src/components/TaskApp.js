import Task from './Task';
import List from './List';
import TaskService from './TaskService';
import ListService from './ListService';

import { findList } from './../utils/auxFunctions'

export default class {
    constructor() {
        this._listSection = new ListService();
        this._currentList = new List();
        
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
                        <span class="section-list-count show-number" id="${list.btnId}">${list.size}</span>`

        listBtn.addEventListener('click', () => {
            this.showTasks(list);
        })
        this._listSection.domID.appendChild(listBtn);
        console.log(listBtn);
    }

    showTasks = (list) => {
        // console.log(this._listSection);
        this._currentList = findList(list.id, this._listSection.allLists())[0];
        console.log(this._currentList);

        // console.log(this._listSection.allLists());
        
       updateListInterface(this._currentList);

        const addTaskWrapper = document.querySelector('.add-task-wrapper');
        const addTaskBtn = document.createElement('button');
        addTaskBtn.classList.add('add-task-btn');
        addTaskBtn.innerHTML = `
            <svg class="add-icon"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
            <span>Add New Task</span>
        `

        addTaskBtn.addEventListener('click', () => {
            this.addTask();
            // console.log(`add task btn was clicked in ${list.name}`);
        });

        addTaskWrapper.innerHTML = '';
        document.querySelector('.task-entry-container').innerHTML = '';
        addTaskWrapper.appendChild(addTaskBtn);

        if (this._currentList.size > 0) {
            this._currentList.allTasks().forEach(task => {
                buildTaskBtn(task);
            });

            console.log('we have shown tasks')
        }
    }

    addTask = () => {
        const task = new Task();
        task.title = prompt('Enter task title');

        buildTaskBtn(task)
        
        this._currentList.addTask(task);
        updateListInterface(this._currentList);
        // console.log(this._currentList);
    }
}

function buildTaskBtn(task) {
    const taskBtn = document.createElement('button');
    taskBtn.classList.add('task');
    taskBtn.innerHTML = `
            <div class="task-main">
            <div>
                <input type="checkbox" class="task-check">
                <span>${task.title}</span>
            </div>
            <svg style="width: 16px; height: 16px; overflow: visible; opacity: 1; z-index: 1; fill: rgb(124, 124, 124);" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
            </div>
    `

    taskBtn.addEventListener('click', () => {
        // console.log(`task with task title ${task.title} and task id ${task.id}`);
    })

    
    document.querySelector('.task-entry-container').appendChild(taskBtn);
    
    document.querySelector('.task-check').addEventListener('click', () => {
        // console.log(`checkbox on task '${task.title}' in list ${this._currentList}`);
    });
}

function updateListInterface(list) {
    const title = document.querySelector('.title');
    title.textContent = list.name;
    title.style.color = list.color;

    const taskCount = document.querySelector('.title-list-count');
    taskCount.textContent = list.size;

    document.querySelector(`#${list.btnId}`).textContent = list.size;
}