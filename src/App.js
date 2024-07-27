import './styles/style.css'
import './styles/menu.css'
import Task from './components/Task'

const newTask = new Task('title', 'some odd description', new Date());

console.log(newTask);

// consolte.log(new Date());
const sysTaskBtn = document.querySelectorAll('.sysTaskCtrl');
console.log(sysTaskBtn);

sysTaskBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(`${btn.dataset.menubtn} button was clicked`);
    });
});