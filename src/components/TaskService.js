import { findTask } from './../utils/auxFunctions'
import { logInfo, logError, logWarning } from './../utils/log'
export default class {
    constructor() {
        this.tasks = [];
    }

    addTask = (task) => {
        this.tasks.push(task);

        logInfo(task, 'add');
    }

    editTask = (id, title, desc, dueDate, priority) => {
        const taskIndex = findTask(id, this.tasks);
        if (taskIndex != -1) {
            this.tasks[taskIndex].title = title;
            this.tasks[taskIndex].desc = desc;
            this.tasks[taskIndex].dueDate = dueDate;
            this.tasks[taskIndex].priority = priority;

            logInfo(this.tasks[taskIndex], 'edit')
        }
    }

    deleteTask = (id) => {
        const taskIndex = findTask(id, this.tasks);
        const taskToDelete = this.tasks[taskIndex];
        this.tasks = this.tasks.filter(task => task.id !== id);

        logInfo(taskToDelete, 'delet');
    }

    toggleComplete = id => {
        const taskIndex = findTask(id, this.tasks)
        if (taskIndex != -1) {
            this.tasks[taskIndex].completed ? false : true;

            logInfo(this.tasks[taskIndex], 'toggl');
        }
    }
}