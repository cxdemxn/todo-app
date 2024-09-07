import List from "./List"
import Task from "./Task"
import ListService from "./ListService"
import TaskService from "./TaskService"

export default class {
    constructor() {
        this.$listService = new ListService()
        this.$taskService = new TaskService()

    }

    createList(name, color) {
        const list = new List()

        list.name = name
        list.color = color
        
        this.$listService.addList(list)
        
        return list
    }

    createTask(title) {
        const task = new Task()

        task.title = title
        
        return task
    }
    
    addTask(task, listId) {
        this.$taskService.addTask(task)
        this.$listService.addTaskToList(listId, task)
    }

    toggleTask(task) {
        // this.$taskService.toggleComplete(task.id)

        task.completed ? task.completed = false : task.completed = true
    }

    getAllLists() {
        this.$listService.allLists()
    }
}