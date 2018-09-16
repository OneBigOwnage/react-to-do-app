class TasksHelper {
    static validateTaskList = (tasks) => {
        // Create an array consisting of boolean values, indicating if a task is done or not.
        const doneUndoneArray = tasks.map(task => task.done);

        // Get the first task in the list that is done.
        let firstIndex = doneUndoneArray.indexOf(true);

        // Check if any tasks after the first 'done' are not 'done'.
        let secondHalf = doneUndoneArray.slice(firstIndex);
        let indexOfUndone = secondHalf.indexOf(false);

        // The tasks are valid if there are no undone tasks after a done task.
        let isValid = indexOfUndone === -1;
        return isValid;
    }
    static setTaskDone = (tasksList, task) => {
        // Remove
        let position = tasksList.map(task => task.id).indexOf(task.id);
        [task] = tasksList.splice(position, 1);

        // Set Done
        task.done = true;

        // Split
        let index = tasksList.map(task => task.done).lastIndexOf(false);
        let firstHalf = tasksList.slice(0, index + 1);
        let secondHalf = tasksList.slice(index + 1);

        // Glue the parts back together
        let editedTask = [];
        editedTask.push(task);

        return firstHalf.concat(editedTask, secondHalf);
    }
    static setTaskTodo = (tasksList, task) => {
        // Remove
        let position = tasksList.map(task => task.id).indexOf(task.id);
        [task] = tasksList.splice(position, 1);

        // Set Done
        task.done = false;

        // Split
        let index = tasksList.map(task => task.done).lastIndexOf(false);
        let firstHalf = tasksList.slice(0, index + 1);
        let secondHalf = tasksList.slice(index + 1);

        // Glue the parts back together
        let editedTask = [];
        editedTask.push(task);
        return firstHalf.concat(editedTask, secondHalf);
    }
};

export default TasksHelper;
