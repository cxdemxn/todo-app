export function getRandomTaskId() {
    return 'task_' + crypto.randomUUID();
}

export function getRandomListId() {
    return 'list_' + crypto.randomUUID();
}

export function getRandomBtnId() {
    return 'btn_' + crypto.randomUUID();
}

export function findTask(id, tasks = []) {
    return tasks.find(task => task.id === id);
}

export function findList(id, list = []) {
    return list.filter(list => list.id === id);
}