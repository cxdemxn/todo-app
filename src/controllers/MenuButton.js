export default class {
    constructor(tasks = null) {
        if (tasks)
            this.tasks = tasks;
        else return;
    }

    initAllBtns = () => {
        this.upcoming();
        this.today();
    }

    upcoming = () => {
        
    }
}