// styles
import './styles/style.css'
import './styles/menu.css'
import './styles/list.css'
import './styles/media.css'

// components
import newCont from './Core/newCont'
import { loadIndex } from './Core/controlla'

// utils
import pageLoad from './utils/pageLoad'

pageLoad()

document.addEventListener('DOMContentLoaded', () => {
    const controller = new newCont()

    const routes = {
        '/': () => { loadIndex() },
        // '/today': () => { controller.loadToday() },
        // '/upcoming': () => { console.log('upcoming') },
        // '/list/:id': (id) => { controller.loadList(id) }
    }


    function handleRoute() {
        const path = window.location.pathname;
        const match = path.match(/\/list\/(.+)/);


        if (match) {
            const id = match[1];
            const routeHandler = routes['/list/:id'];
            routeHandler(id)
        } else {
            const routeHandler = routes[path] || routes['/'];
            console.log('here')
            routeHandler()
        }
    }

    function navigateTo(url) {
        window.history.pushState({}, '', url);
        handleRoute();
    }


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
    // controller._initApp()

    window.addEventListener('beforeunload', handleRoute())
});
