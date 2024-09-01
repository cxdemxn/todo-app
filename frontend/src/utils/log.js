export function logInfo(task, status) {
    console.log(`${task.title} was ${status}ed successfully`);
}

export function logWarn() {

}

export function logError() {

}

export default class {
    logAdd = () => {
        console.log('Task was added successfully');
    }

    logEdited = task => {
        if (task)
            console.info(`${task.id} was edited successfully`);
        else
            console.error(`Error: unable to edit ${task.id}`);
    }

    logDeleted = task => {

    }

    logCompleted = task => {
        
    }
}