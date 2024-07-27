import menu from './../modules/menu'

export default function () {
    loadMenu();
}

function loadMenu() {
    const menuContainer = document.querySelector('.menu-container');

    menuContainer.innerHTML = menu();

    loadMenuButtons();
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