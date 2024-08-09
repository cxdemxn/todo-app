import Task from './Task';
import List from './List';
import ListService from './ListService';

import { findList, getRandomTaskBtnId, getRandomListBtnId } from './../utils/auxFunctions'

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
        // if (!list._btnId) {
        //     list._btnId = getRandomListBtnId();
        // }
        // newList.btnId = list._btnId;
        // newList.btnId = undefined;
        newList.btnId = getRandomListBtnId();
        newList._tasks = buildTask(list._tasks);


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
        // if (!task._btnId) { // to fix task without a button id in previous release
        //     task._btnId = getRandomTaskBtnId();
        // }
        // newTask.btnId = task._btnId;
        // newTask.btnId = undefined;
        newTask.btnId = getRandomTaskBtnId();
        newTask.completed = task._completed;


        taskArray.push(newTask);
    });
    return taskArray;
}


export default class {
    constructor() {
        this._listSection = buildListSection();
        this._currentList = new List();


        // this renders saved lists in the list section if and only if there are lists in the listSection property and there are no lists displayed in the list section interface
        if (this._listSection.size > 0 && this._listSection.domID.children.length <= 0) {
            this.renderSavedState();
        }

        this.addListHandler = this.addList.bind(this);
        this.addListElement = document.querySelector('.add-list');
        this.addListElement.addEventListener('click', this.addListHandler);

        console.log(this._listSection)
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
        });
        this._listSection.domID.appendChild(listBtn);
    }

    showTasks = (list) => {
        this._currentList = findList(list.id, this._listSection.allLists())[0];

        updateListInterface(this._currentList);

        setMobileInterface();

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
                this.buildTaskBtn(task);
            });

        }
    }

    addTask = () => {
        const task = new Task();
        task.title = prompt('Enter task title');

        if (!task.title)
            return;

        this.buildTaskBtn(task, this._listSection);
        
        this._currentList.addTask(task);
        saveToStorage(this._listSection);
        updateListInterface(this._currentList);
    }

    renderSavedState = () => {

        this._listSection.allLists().forEach(list => {
            this.renderList(list);
        });
    }



    buildTaskBtn(task, listSection) {
        const taskBtn = document.createElement('button');
        taskBtn.classList.add('task');
        taskBtn.setAttribute('id', `${task.btnId}`);
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
        });
        
        document.querySelector('.task-entry-container').appendChild(taskBtn); // this is where the task gets updated to the interface
        
        if (task.completed) {

            completeOn(task.btnId);
            document.querySelector(`#${task.id}`).checked = true;
        }
    
        document.querySelector(`#${task.id}`).addEventListener('click', () => {
    
            toggleCompleted(task);

            saveToStorage(this._listSection);
        });

        console.log(taskBtn);
    }
}





























function toggleCompleted(task) {

    if (task.btnId === undefined) return;

    const selectedBtn = document.querySelector(`#${task.btnId}`);

    if (!task.completed) {
        completeOn(task.btnId);
        task.completed = true;
    } else {
        completeOff(task.btnId)
        task.completed = false;
    }
}

function completeOn(id) {
    console.log(id);

    if (id === undefined) return;

    const selectedBtn = document.querySelector(`#${id}`);
    
    selectedBtn.classList.add('completed');
    selectedBtn.disabled = true;
}

function completeOff(id) {
    if (id === undefined) return;

    const selectedBtn = document.querySelector(`#${id}`);

    selectedBtn.classList.remove('completed');
    selectedBtn.disabled = false;
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

function setMobileInterface() {
    if (window.matchMedia('(max-width: 900px)').matches) {
        document.querySelector('.menu-container').classList.add('hidden');
        const listSect = document.querySelector('.main-view-container');
        listSect.classList.remove('hidden');
        listSect.classList.add('current-screen');

        document.querySelector('.list-exit').addEventListener('click', () => {
            document.querySelector('.main-view-container').classList.add('hidden');

            const menuSect = document.querySelector('.menu-container');
            menuSect.classList.remove('hidden');
            menuSect.classList.add('current-screen');
        })

   }
}