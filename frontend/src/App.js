// styles
import './styles/style.css'
import './styles/menu.css'
import './styles/list.css'
import './styles/media.css'

// components
import newCont from './Core/newCont'
import { handleReload, initApp } from './Core/controlla'

// utils
import pageLoad from './utils/pageLoad'

import * as Router from './Core/Router'

pageLoad()

document.addEventListener('DOMContentLoaded', () => {

    document.body.addEventListener('click', (event) => {
        const anchor = event.target.closest('a')
        if (anchor && anchor.href) {
            event.preventDefault()
            Router.navigateTo(new URL(anchor.href).pathname)
        }
    })

    window.addEventListener('popstate', Router.handleRoute)

    window.addEventListener('beforeunload', handleReload(Router.handleRoute))

    initApp()
})
