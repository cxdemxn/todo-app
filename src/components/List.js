import TaskService from './TaskService'
import { getRandomListId, getRandomBtnId } from './../utils/auxFunctions'

export default class extends TaskService {
    constructor(listNsme ='', listColor = '') {
        super();

        this._id = getRandomListId()
        this._name = listNsme;
        this._color = listColor;
        this._btnId = getRandomBtnId();
        // this._tasks = [];
    }

    get id() {
        return this._id;
    }

    set id(oldId) {
        this._id = oldId;
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

    get btnId() {
        return this._btnId;
    }
    
    set btnId(oldBtnId) {
        this._btnId = oldBtnId;
    }

    get size() {
        return this._tasks.length;
    }

    allTasks = () => {
        return this._tasks;
    }
}