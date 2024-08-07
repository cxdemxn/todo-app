import Task from './Task';
import List from './List';
import TaskService from './TaskService';
import ListService from './ListService';

import { findList } from './../utils/auxFunctions'

function buildListSection() {
    if (localStorage.getItem('lists')) {
        const builtSection = new ListService()
        builtSection._lists =  JSON.parse(localStorage.getItem('lists'))._lists;
        builtSection._lists =  buildList(JSON.parse(localStorage.getItem('lists'))._lists);

        return builtSection;
    }

    return new ListService();
}

function buildList(lists) {
    const listArray = []
    lists.forEach(list => {
        const newList = new List();

        newList.id = list._id;
        newList.name = list._name;
        newList.color = list._color;
        newList.btnId = list._btnId;
        newList._tasks = buildTask(list._tasks);
        // newList._tasks = list._tasks;

        listArray.push(newList);
    });

    return listArray;
}

function buildTask(tasks) {
    const taskArray = []
    tasks.forEach(task => {
        const newTask = new Task();

        newTask.id = task._id;
        newTask.title = task._title;


        taskArray.push(newTask);
    });
    return taskArray;
}


export default class {
    constructor() {
        this._listSection = buildListSection();
        this._currentList = new List();

        console.log(this._listSection.domID.children.length)

        if (this._listSection.size > 0 && this._listSection.domID.children.length <= 0) {
            this.renderSavedState();
        }

        this.addListHandler = this.addList.bind(this);
        this.addListElement = document.querySelector('.add-list');
        this.addListElement.addEventListener('click', this.addListHandler);
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
        console.log('called addList from TaskApp');
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
        });
        this._listSection.domID.appendChild(listBtn);
    }

    showTasks = (list) => {
        this._currentList = findList(list.id, this._listSection.allLists())[0];


       updateListInterface(this._currentList);

       if (window.matchMedia('(max-width: 900px)').matches) {
            console.log('we are at small device')
            document.querySelector('.menu-container').classList.add('hidden');
            const listSect = document.querySelector('.main-view-container');
            listSect.classList.remove('hidden');
            listSect.classList.add('current-screen');

       }

        const addTaskWrapper = document.querySelector('.add-task-wrapper');
        const addTaskBtn = document.createElement('button');
        addTaskBtn.classList.add('add-task-btn');
        addTaskBtn.innerHTML = `
            <svg class="add-icon"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
            <span>Add New Task</span>
        `

        addTaskBtn.addEventListener('click', () => {
            this.addTask();
        });

        addTaskWrapper.innerHTML = '';
        document.querySelector('.task-entry-container').innerHTML = '';
        addTaskWrapper.appendChild(addTaskBtn);


        if (this._currentList.size > 0) {
            this._currentList.allTasks().forEach(task => {
                buildTaskBtn(task);
            });

        }
    }

    addTask = () => {
        const task = new Task();
        task.title = prompt('Enter task title');

        if (!task.title)
            return;

        buildTaskBtn(task)
        
        this._currentList.addTask(task);
        saveToStorage(this._listSection);
        updateListInterface(this._currentList);
    }

    renderSavedState = () => {

        this._listSection.allLists().forEach(list => {
            this.renderList(list);
        });
    }
}



























function buildTaskBtn(task) {
    const taskBtn = document.createElement('button');
    taskBtn.classList.add('task');
    taskBtn.innerHTML = `
            <div class="task-main">
            <div>
                <input type="checkbox" class="task-check" id="${task.id}">
                <span>${task.title}</span>
            </div>
            <svg style="width: 16px; height: 16px; overflow: visible; opacity: 1; z-index: 1; fill: rgb(124, 124, 124);" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
            </div>
    `

    taskBtn.addEventListener('click', () => {
    })

    
    document.querySelector('.task-entry-container').appendChild(taskBtn);
    
    document.querySelector(`#${task.id}`).addEventListener('click', () => {
        console.log(`task check for ${task.title} was clicked`);
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

function saveToStorage(listSection) {
    localStorage.setItem('lists', JSON.stringify(listSection));
}