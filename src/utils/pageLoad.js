import menu from './../modules/menu'
import main from './../modules/main'

export default function () {
    loadMenu();
    // loadMain();
}

function loadMenu() {
    const menuContainer = document.querySelector('.menu-container');

    menuContainer.innerHTML = menu();

    loadMenuButtons();
}

function loadMain() {
    const mainContainer = document.querySelector('.main-view-container');

    mainContainer.innerHTML = main()

}

function loadMenuButtons() {
    const sysTaskBtn = document.querySelectorAll('.sysTaskCtrl');
    // console.log(sysTaskBtn);

    sysTaskBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log(`${btn.dataset.menubtn} button was clicked`);
        });
    });
}