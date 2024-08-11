export default class {
    constructor() {
        this._domId = document.querySelector('.add-to-list');
        this._lists = [];
    }

    get domID() {
        return this._domId;
    }

    addList = (list) => {
        this._lists.push(list);
    }

    allLists = () => {
        return this._lists;
    }

    get size() {
        return this._lists.length;
    }
}