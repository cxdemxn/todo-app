import { loadMenu, loadMain } from "../utils/pageLoad"
import TaskEventManager from "../components/TaskEventManager"
import TaskAppService from "../components/TaskAppService"
import TaskAppView from "../components/TaskAppView"
// import pageLoad from "../utils/pageLoad"

const backendUrl = process.env.APP_API_URL

export default class {
    constructor() {
        this.view = new TaskAppView()
        this.service = new TaskAppService()
        this.eventManager = new TaskEventManager()


        // this._initApp()
    }

    _initApp() {
        this.loadIndex()
    }

    handleAddList (name, color) {

        const list = this.service.createList(name, color)

        fetch(`${backendUrl}/addList`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                id: list.id,
                name: list.name,
                color: list.color,
                btnId: list.btnId
            })
        }).then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json()
        }).then(data => {
            this.view.renderListButton(data)
        }).catch(error => {
            console.error(`Error creating list: ${error.message}`)
        })
    }

    renderExistingListBtns(allLists) {
        loadMenu()

        allLists.forEach(list => {
            this.view.renderListButton(list)
        })
    }
    
    async loadIndex() {
        // loadMain()
        if (document.querySelector('.list-view')) {
            document.querySelector('.main-view-container').textContent = 'nothing to see here'
        }
        
        fetch(`${backendUrl}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error, could not get all lists! status: ${response.status}`);
            }
            return response.json()
        }).then(data => {
            if (data.length > 0) {
                this.renderExistingListBtns(data)
            } else {
                loadMenu()
            }

            this.eventManager.bindAddList(this.handleAddList.bind(this))

        }).catch((error) => {
            
            console.error('here', error)
        })
    }

    loadToday() {
        // document.querySelector('#main-dummy').textContent = 'this is the today page'
    }
    
    loadList(id) {
        
        fetch(`${backendUrl}/list/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json()
        }).then(async data => {
            // await this.loadIndex()
            loadMain()
            this.view.renderList(data)
            this.view.updateListInterface(data)
            
        }).catch((reason) => {
            console.error('Error rendering list', reason.message, reason)

        })
    }
}