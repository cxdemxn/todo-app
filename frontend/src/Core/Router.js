import routes from "../routes"

export function handleRoute() {
    const fullPath = window.location.pathname.split('/')
    

    const pathname = (fullPath[1]) ? `/${fullPath[1]}` : '/'
    const pathid = fullPath[2]


    const rounteHandler = routes[pathname] || routes['/']
    rounteHandler(pathid)

}

export function navigateTo(url) {
    window.history.pushState({}, '', url);
    handleRoute();
}