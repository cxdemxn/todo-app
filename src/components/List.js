import TaskService from './TaskService'

export default class extends TaskService {
    constructor(listNsme ='', listColor = '') {
        super();

        this._name = listNsme;
        this._color = listColor;
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

    numTasks = () => {
        return this._tasks.length;
    }


}