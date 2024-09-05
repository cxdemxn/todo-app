import { handleReload, loadIndex, loadList } from './Core/controlla'


export default {
    '/': () => { loadIndex() },
    // '/today': () => { controller.loadToday() },
    // '/upcoming': () => { console.log('upcoming') },
    // '/list': (id) => { controller.loadList(id) }
    '/list': (id) => { loadList(id) }
}