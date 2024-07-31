import List from './List'

export default class {
    constructor() {

    }

    addList = (list) => {
        const listsContainer = document.querySelector('.add-to-list');

        const btn = document.createElement('button');

        btn.innerHTML = `<div>
                            <div class="list-color" style="background-color:${list.color};"></div>
                            <span class="section-list-text">${list.name}</span>
                        </div>
                        <span class="section-list-count show-number">${list.size}</span>`

        listsContainer.appendChild(btn);
    }
}