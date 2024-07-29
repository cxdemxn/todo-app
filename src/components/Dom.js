import List from './List'

export default class {
    constructor() {

    }

    addList(listSection) {
        const newList = new List();
        newList.name = prompt('enter list name');
        newList.color = prompt('enter list color');

        const list = document.createElement('button');
        list.innerHTML = `<div>
                                    <div class="list-color" style="background-color:${newList.color};"></div>
                                <span class="section-list-text">${newList.name}</span>
                                </div>
                                <span class="section-list-count show-number"></span>`

        list.addEventListener('click', () => {
            this.buildTaskView(newList);
        })

        listSection.domID.appendChild(list);
        listSection.addList(newList);

        return newList;
    }

    buildTaskView(list) {
        console.log(list);
        const listTitle = document.querySelector('.title');
        listTitle.innerHTML = `${list.name}`;
        listTitle.style.color = list.color;
    }
}