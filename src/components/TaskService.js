/*

store each task's id in the dataset attribute in the html to assist tracking

*/

import { findTask } from './../utils/auxFunctions'

export default class {
    constructor() {
        this.tasks = [];
    }

    addTask = (task) => {
        this.tasks.push(task);
    }

    editTask = (id, title, desc, dueDate, priority) => {
        const taskIndex = findTask(id, this.tasks);
        if (taskIndex != -1) {
            this.tasks[taskIndex].title = this.tasks[taskIndex].title ? this.tasks[taskIndex].title : title;

            this.tasks[taskIndex].desc = this.tasks[taskIndex].desc ? this.tasks[taskIndex].desc : desc;

            this.tasks[taskIndex].dueDate = this.tasks[taskIndex].dueDate ? this.tasks[taskIndex].dueDate : dueDate;

            this.tasks[taskIndex].priority = this.tasks[taskIndex].priority ? this.tasks[taskIndex].priority : priority;


            return this.tasks[taskIndex];
        }
        return null;
    }

    deleteTask = (id) => {
        const taskIndex = findTask(id, this.tasks);
        const taskToDelete = this.tasks[taskIndex];
        this.tasks = this.tasks.filter(task => task.id !== id);

        return taskToDelete;
    }

    toggleComplete = id => {
        const taskIndex = findTask(id, this.tasks)
        if (taskIndex != -1) {
            this.tasks[taskIndex].completed ? false : true;

            return this.tasks[taskIndex];
        }
    }
}