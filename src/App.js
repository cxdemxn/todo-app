import './styles/style.css'
import './styles/menu.css'
import Task from './components/Task'

const newTask = new Task('title', 'some odd description', new Date());

console.log(newTask);
console.info('this is an info message');
console.warn('this is a warning message');
console.error('this is an error message');

let stat = 'delete';

console.log(`${newTask.title} was ${stat}d successfully`);

// console.log(new Date());