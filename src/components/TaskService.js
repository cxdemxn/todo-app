/*

store each task's id in the dataset attribute in the html to assist tracking

*/

import { findTask } from './../utils/auxFunctions'

export default class {
    constructor() {
        this._tasks = [];
    }

    addTask = (task) => {
        this._tasks.push(task);
    }

    editTask = (id, title, desc, dueDate, priority) => {
        const taskIndex = findTask(id, this._tasks);
        if (taskIndex != -1) {
            this._tasks[taskIndex].title = this._tasks[taskIndex].title ? this._tasks[taskIndex].title : title;

            this._tasks[taskIndex].desc = this._tasks[taskIndex].desc ? this._tasks[taskIndex].desc : desc;

            this._tasks[taskIndex].dueDate = this._tasks[taskIndex].dueDate ? this._tasks[taskIndex].dueDate : dueDate;

            this._tasks[taskIndex].priority = this._tasks[taskIndex].priority ? this._tasks[taskIndex].priority : priority;


            return this._tasks[taskIndex];
        }
        return null;
    }

    deleteTask = (id) => {
        const taskIndex = findTask(id, this._tasks);
        const taskToDelete = this._tasks[taskIndex];
        this._tasks = this._tasks.filter(task => task.id !== id);

        return taskToDelete;
    }

    toggleComplete = id => {
        const taskIndex = findTask(id, this._tasks)
        if (taskIndex != -1) {
            this._tasks[taskIndex].completed ? false : true;

            return this._tasks[taskIndex];
        }
    }
}