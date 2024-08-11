export default class {
    constructor() {
        this.addListButton = document.querySelector(`.add-list`)
    }

    renderListButton(list) {
        const listBtn = document.createElement('button')
        listBtn.innerHTML = `<div>
                            <div class="list-color" style="background-color:${list.color}"></div>
                            <span class="section-list-text">${list.name}</span>
                        </div>
                        <span class="section-list-count show-number" id="${list.btnId}">${list.size}</span>`

        document.querySelector('.add-to-list').appendChild(listBtn)

        return listBtn
    }

    renderList(list) {
        this._updateListInterface(list)

        const addTaskWrapper = document.querySelector('.add-task-wrapper')
        const addTaskBtn = document.createElement('button')
        addTaskBtn.classList.add('add-task-btn')
        addTaskBtn.innerHTML = `
            <svg class="add-icon"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
            <span>Add New Task</span>
        `

        // addTaskBtn.addEventListener('click', () => {
        //     this.addTask()
        // })

        addTaskWrapper.innerHTML = ''
        document.querySelector('.task-entry-container').innerHTML = ''
        addTaskWrapper.appendChild(addTaskBtn)


        // if (this._currentList.size > 0) {
        //     this._currentList.allTasks().forEach(task => {
        //         this.buildTaskBtn(task)
        //     })

        // }

        return addTaskBtn
    }

    renderTaskButton(task) {
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
    }

    toggleTaskCheck(handler, task) {
        document.querySelector(`#${task.id}`).addEventListener('click', () => {
    
            toggleCompleted(task);

            saveToStorage(this._listSection);
        });
    }

    renderTaskCompleted(id) {
        if (id === undefined) return

        const btn = document.querySelector(`#${id}`)

        btn.classList.add('completed')
        btn.disabled = true
    }

    renderTaskIncomplete(id) {
        if (id === undefined) return;

        const btn = document.querySelector(`#${id}`);

        btn.classList.remove('completed');
        btn.disabled = false;
    }

    _updateListInterface(list) {
        const title = document.querySelector('.title')
        title.textContent = list.name
        title.style.color = list.color

        const taskCount = document.querySelector('.title-list-count')
        taskCount.textContent = list.size

        document.querySelector(`#${list.btnId}`).textContent = list.size
    }
}