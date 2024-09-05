// styles
import './styles/style.css'
import './styles/menu.css'
import './styles/list.css'
import './styles/media.css'

// components
import newCont from './Core/newCont'
import { handleReload, loadIndex, loadList } from './Core/controlla'

// utils
import pageLoad from './utils/pageLoad'

const routes = {
    '/': () => { loadIndex() },
    // '/today': () => { controller.loadToday() },
    // '/upcoming': () => { console.log('upcoming') },
    // '/list': (id) => { controller.loadList(id) }
    '/list': (id) => { loadList(id) }
}


function handleRoute() {
    const fullPath = window.location.pathname.split('/')
    
    const pathname = (fullPath[1]) ? `/${fullPath[1]}` : '/'
    const pathid = fullPath[2]


    const rounteHandler = routes[pathname] || routes['/']
    rounteHandler(pathid)

}

function navigateTo(url) {
    window.history.pushState({}, '', url);
    handleRoute();
}

pageLoad()


document.addEventListener('DOMContentLoaded', () => {
    const controller = new newCont()

    


    document.body.addEventListener('click', (event) => {
        const anchor = event.target.closest('a');
        if (anchor && anchor.href) {
            event.preventDefault();
            // console.log(new URL(anchor.href))
            navigateTo(new URL(anchor.href).pathname);
        }
    });

    window.addEventListener('popstate', handleRoute);
    // window.addEventListener('load', handleRoute);

    // handleRoute()
    window.addEventListener('beforeunload', handleReload(handleRoute))
    // controller._initApp()

});
