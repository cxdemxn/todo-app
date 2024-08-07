// styles
import './styles/style.css'
import './styles/menu.css'
import './styles/list.css'
import './styles/media.css'

// components
import Dom from './components/Dom'
import List from './components/List'
import Task from './components/Task'
import TaskApp from './components/TaskApp'
import ListService from './components/ListService'
import SmallTaskApp from './components/SmallTaskApp'

// utils
import pageLoad from './utils/pageLoad'





const newTask = new Task('title', 'some odd description', new Date());

document.addEventListener('DOMContentLoaded', () => {
let taCount = false;
let staCount = false;
    

    pageLoad();
    const dom = new Dom();
    // const taskApp = new TaskApp();
    const listSection = new ListService();

    // const mediaQuery = window.matchMedia('(max-width: 900px)');

    // function handleScreenSizeChange(mediaQuery){
    //     if (mediaQuery.matches) {
    //         // alert('works!')
    //         import('./styles/media.css').then(() => {
    //             console.log('style applied');
    //         });
    //         if (!staCount)
    //             new SmallTaskApp();
    //         staCount = true;
    //     } else {
    //         // alert('no work')
    //         console.log('some shii abeg')

    //         if (!taCount)
                new TaskApp();
    //         taCount = true;
    //     }
    // }

    // handleScreenSizeChange(mediaQuery)

    // mediaQuery.addEventListener('change', handleScreenSizeChange);

    const testSection = JSON.parse(localStorage.getItem('lists'));
    // console.log(testSection);

    // document.querySelector('.add-list').addEventListener('click', () => {
    //     // const list = new List();
    //     // list.name = prompt('enter name');
    //     // list.color = prompt('enter color');

    //     // dom.addList(list);
    //     // listSection.addList(list);
    //     taskApp.addList();

    // });

    console.log(String(Math.random() * 20).split('.').join(''))

    // document.querySelector('#')
});



