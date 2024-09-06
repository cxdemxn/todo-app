import { loadMenu, loadMain } from "../utils/pageLoad"
import TaskEventManager from "../components/TaskEventManager"
import TaskAppService from "../components/TaskAppService"
import TaskAppView from "../components/TaskAppView"

const backendUrl = process.env.APP_API_URL || 'https://iam-todo-service.onrender.com/api'
const appView = new TaskAppView()
const appService = new TaskAppService()
const appEventManager = new TaskEventManager()


export default class {
    constructor() {
        this.view = new TaskAppView()

    }
}

export async function handleReload(handler) {
    if (window.location.pathname !== '/')
        await loadIndex()

    handler()
}

export function initApp() {
    loadIndex()
}

export async function loadIndex() {
// renders existing lists in the list section

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

        if (!response.ok) {
            throw new Error('Bad response fetching existing ')
        }

        const data = await response.json()
        loadMenu()
        data.forEach(list => {
            appView.renderListButton(list)
        })
    } catch (error) {
        console.error('Error loading existing lists', error.message)
    }

    appEventManager.bindAddList(addList)

}

export async function loadList(listId) {
    
    try {
        const response = await fetch(`${backendUrl}/list/${listId}`)
        
        if (!response.ok) {
            const errorData = await response.json()
            throw new Error('API error: ' + errorData.errorMessage)
        }
        
        const data = await response.json()
        
        loadMain()
        appView.updateListInterface(data)
        appView.renderList(data)
    } catch (error) {
        console.error(`loadList:\n${error.message}`)
    }
}



async function existingListsToRender() {
    try {
        const response = await fetch(`${backendUrl}/list/count`)

        if (!response.ok) {
            const errorData = await response.json()
            throw new Error('API error: ' + errorData.error)
        }

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

async function addList(name, color) {
    console.log('list added', {
        name,
        color
    })
    const list = appService.createList(name, color)
    
    let response;
    try {
        response = await fetch(`${backendUrl}/list/addList`, {
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
        })

        if (!response.ok) {
            throw new Error('bad response from adding list')

        }

        console.log(response)
    } catch (error) {
        console.error(`HTTP ERROR!\nStatus: ${response.status}\nMessage: ${error.message}`)
        return
    }

    let data;
    try {
        data = await response.json()
    } catch (error) {
        console.error(`PARSE ERROR!\nMessage: ${error.message}`)
        return
    }

    appView.renderListButton(data)
}