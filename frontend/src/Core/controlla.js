import { loadMenu, loadMain } from "../utils/pageLoad"
import TaskEventManager from "../components/TaskEventManager"
import TaskAppService from "../components/TaskAppService"
import TaskAppView from "../components/TaskAppView"

const backendUrl = process.env.APP_API_URL
const view = new TaskAppView()


export default class {
    constructor() {
        this.view = new TaskAppView()

    }
}

export async function handleReload(handler) {
    await loadIndex()

    handler()
}

export async function loadIndex() {
    if (! ( await existingListsToRender())) {
        return
    }

    if (document.querySelector('.list-view')) {
        document.querySelector('.main-view-container').textContent = 'nothing to see here'
    }

    try {
        const response = await fetch(`${backendUrl}/list`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
        const data = await response.json()
        data.forEach(list => {
            view.renderListButton(list)
        })
    } catch (error) {
        console.error('Error loading existing lists', error.message)
    }
}

export async function loadList(listId) {

    try {
        const response = await fetch(`${backendUrl}/list/${listId}`)
        const data = await response.json()
        
        loadMain()
        view.updateListInterface(data)
        view.renderList(data)
        console.log(data)
    } catch (error) {
        console.error(`Smth ain't right ${error.message}
            ${error}
            `)
    }
}



async function existingListsToRender() {
    try {
        // console.log('data')
        const response = await fetch(`${backendUrl}/list/count`)
        const data = await response.json()

        if (data.listCount > 0)
            return true
        else 
            return false
    } catch (err) {
        console.error('Error fetching list count: ', err.message)
        return false
    }
}