import TaskService from './TaskService'

export default class extends TaskService {
    constructor(listNsme ='', listColor = '') {
        super();

        this._name = listNsme;
        this._color = listColor;
        this._btn = document.createElement('button');
        this._tasks = [];
    }

    get name()  {
        return this._name;
    }

    set name(value) {
        this._name = value
    }

    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value
    }

    get size() {
        return this._tasks.length;
    }

    numTasks = () => {
        return this._tasks.length;
    }

    btn = () => {
        this._btn.innerHTML = `<div>
                                <div class="list-color" style="background-color:${this.color};"></div>
                                <span class="section-list-text">${this.name}</span>
                                </div>
                                <span class="section-list-count show-number">${this.size}</span>`

        this._btn.addEventListener('click', () => {
            // console.log(`called from ${this.name}`);
            this.showTasks();

            

        });

        return this._btn;
    }

    showTasks =  () => {
        const listTitle = document.querySelector('.title');
        listTitle.innerHTML = `${this.name}`;
        listTitle.style.color = this.color;


        const listCount = document.querySelector('.title-list-count');
        listCount.innerHTML = `${this.size}`;

        document.querySelector('.add-task-wrapper').innerHTML = `
            <button type="button" class="add-task-btn">
                            <svg class="add-icon"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                            <span>Add New Task</span>
                        </button>
        `;

        document.querySelector('.add-task-btn').addEventListener('click', () => {
            console.log(`called from ${this.name}`);

            // const 
        });
    }

    addTask = () => {

    }
}