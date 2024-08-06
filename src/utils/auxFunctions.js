export function getRandomTaskId() {
    // return 'task_' + crypto.randomUUID();
    return 'task_' + String(Math.random() * 20).split('.').join('');
}

export function getRandomListId() {
    // return 'list_' + crypto.randomUUID();
    return 'list_' + String(Math.random() * 20).split('.').join('');
}

export function getRandomBtnId() {
    // return 'btn_' + crypto.randomUUID();
    return 'btn_' + String(Math.random() * 20).split('.').join('');
}

export function findTask(id, tasks = []) {
    return tasks.find(task => task.id === id);
}

export function findList(id, list = []) {
    return list.filter(list => list.id === id);
}