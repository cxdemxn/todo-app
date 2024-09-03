// styles
import './styles/style.css'
import './styles/menu.css'
import './styles/list.css'
import './styles/media.css'

// components
import Task from './components/Task'
import TaskApp from './components/TaskApp'
import NewTaskApp from './components/TaskAppController'
import ListService from './components/ListService'
import newCont from './Core/newCont'

// utils
import pageLoad from './utils/pageLoad'



document.addEventListener('DOMContentLoaded', () => {
    const controller = new newCont()

    const routes = {
        '/': () => { controller.loadIndex() },
        '/today': () => { controller.loadToday() },
        '/upcoming': () => { console.log('upcoming') },
        '/list/:id': (id) => { controller.loadList(id) }
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
    controller._initApp()

    async function fetchData() {
        console.log('hey')
        try {
            const response = await fetch('http://localhost:5000/api/data') 
            const data = await response.json()
            
            const h1 = document.createElement('h1')
            h1.textContent = data.message

            document.querySelector('.menu-container').appendChild(h1)
        } catch(error) {
            console.log(`error: ${error.message}`)
        }
    }

    // fetchData()


    window.addEventListener('beforeunload', handleRoute())
});
