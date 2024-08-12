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

        this.eventManager.setListEvent(listBtn, list, this.handleRenderTasks.bind(this))
    }

    handleRenderTasks(list) {
        this.$currentList = list
        
        this.view.renderList(list)
        this.eventManager.bindAddTask(this.handleAddTask.bind(this))

        if (this.$currentList.size > 0) {
            this.$currentList.allTasks().forEach(task => {
                this.view.renderTaskButton(task)

                this.eventManager.bindToggleTaskCompleted(this.handleTogglTaskeCompleted.bind(this), task)

                this.view.toggleTaskCompleted(task.completed, task.btnId, task.id)
            })

        }
    }

    handleAddTask(title) {
        const task = this.service.createTask(title)

        this.service.addTask(task, this.$currentList.id)

        this.view.renderTaskButton(task)

        // update ui list information
        this.view.updateListInterface(this.$currentList)

        this.eventManager.bindToggleTaskCompleted(this.handleTogglTaskeCompleted.bind(this), task)

        console.log(this.service.getAllLists())
    }

    handleTogglTaskeCompleted(task) {
        console.log(`toggleTaskCompleted for task ${task.title}`)
        this.service.toggleTask(task)

        if (task.completed) {
            console.log('strike')
            this.view.renderTaskCompleted(task.btnId, task.id)
        } else {
            console.log('no strike')
            this.view.renderTaskIncomplete(task.btnId, task.id)
        }
    }


    
}