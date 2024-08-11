import List from './List'
import TaskAppView from './TaskAppView'
import TaskAppService from './TaskAppService'
import TaskEventManager from './TaskEventManager'

export default class {
    constructor() {
        this.view = new TaskAppView()
        this.service = new TaskAppService()
        this.eventManager = new TaskEventManager()
        this.$currentList = new List()

        this._initialize()
    }

    _initialize() {
        this.eventManager.bindAddList(this.handleAddList.bind(this))
        
    }

    handleAddList = (name, color) => {
        const list = this.service.createList(name, color)

        const listBtn = this.view.renderListButton(list)

        this.eventManager.setListEvent(listBtn, list, this.handleRenderTask.bind(this))
    }

    handleRenderTask(list) {
        this.$currentList = list
        
        const addTaskBtn = this.view.renderList(list)
        this.eventManager.bindAddTask(this.handleAddTask.bind(this))
    }

    handleAddTask(title) {
        const task = this.service.createTask(title)

        this.view.renderTaskButton(task)

        this.eventManager.bindToggleTaskCompleted(this.handleTogglTaskeCompleted.bind(this), task)
    }

    handleTogglTaskeCompleted(task) {
        this.service.toggleTask(task)

        if (task.completed) {
            console.log('strike')
            this.view.renderTaskCompleted(task.btnId)
        } else {
            console.log('no strike')
            this.view.renderTaskIncomplete(task.btnId)
        }
    }


    
}