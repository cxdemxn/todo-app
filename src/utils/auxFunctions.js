export function getRandomTaskId() {
    return crypto.randomUUID();
}

export function findTask(id, tasks = []) {
    return tasks.find(task => task.id === id);
}