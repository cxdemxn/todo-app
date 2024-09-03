export default class {
    constructor() {

    }

    bindAddList(handler) {
        document.querySelector(`.add-list`).addEventListener('click', () => {
            const name = prompt('Enter list name')
            if (!name) return
            const color = prompt('enter list color')

            if (name && color) {
                handler(name, color)
            }
        })


    }

    setListEvent(btn, list, handler) {
        btn.addEventListener('click', () => {
            handler(list)
        })
    }

    bindAddTask(handler) {
        document.querySelector('.add-task-btn').addEventListener('click', () => {
            const title = prompt('Enter List Title')

            if (title) {
                handler(title)
            }
        })
    }

    

    bindToggleTaskCompleted(handler, task) {

        document.querySelector(`#${task.id}`).addEventListener('click', () => {
            handler(task)
        })

        // (completed) ?
        // this.bindTaskCompleted(id) :
        // this.bindTaskIncomplete(id)
    }
}