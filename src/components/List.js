import TaskService from 'TaskService'

export default class extends TaskService {
    constructor(listNsme, listColor) {
        super();

        this._name = listNsme;
        this._color = listColor;
    }

    get name()  {
        return this._name;
    }

    get color() {
        return this._color;
    }

    numTasks = () => {
        return this._tasks.length;
    }


}