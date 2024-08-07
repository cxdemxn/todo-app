import TaskApp from './TaskApp'

export default class extends TaskApp {
    constructor() {
        super();

        this.addListElement.removeEventListener('click', this.addListHandler);

        document.querySelector('.add-list').addEventListener('click', () => {
            this.addList();
        });
    }

    // addList = () => {
    //     console.log('called from small task app');

    // }

    // showTasks = () => {
        // console.log('showing mobile task');
        // super.showTasks(list);


    // }
}