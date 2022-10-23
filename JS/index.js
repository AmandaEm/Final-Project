const taskManager = new TaskManager();
taskManager.load();
taskManager.render();

function validFormFieldInput() {
    const newTaskNameInput = document.getElementById('name');
    const name = newTaskNameInput.value;
    console.log("name:  "+name);

    const newTaskDescription = document.getElementById('description');
    const description = newTaskDescription.value;
    console.log("description:  "+description);

    const newTaskAssigned = document.getElementById('assigned');
    const assignedTo = newTaskAssigned.value;
    console.log("assignedTo:  "+assigned);

    const newTaskDueDate = document.getElementById('dueDate');
    const dueDate = newTaskDueDate.value;
    console.log("dueDate:  "+dueDate);
    
    const newTaskStatus = document.getElementById('_status');
    const status = newTaskStatus.value;
    console.log("status:  "+status);

    const newTaskTextarea = document.getElementById('textarea');
    const textarea = newTaskTextarea.value;
    console.log("textarea:  "+textarea);

  
    if(name === '') {
     alert('please enter a name') 
    } else if (description === '') {
        alert('please enter a description')
    } else if (assignedTo === '') {
        alert('please enter who task is assigned to')
    } else if (dueDate === '') {
        alert('please enter a date')
    }  else if (status === '') {
        alert('please enter a status')
    } else {
        taskManager.addTask(name, description, assignedTo, dueDate, status)
    taskManager.save();
    taskManager.render();
    newTaskNameInput.value="";
    newTaskDescription.value="";
    newTaskAssigned.value="";
    newTaskDueDate.value="";
    }
}


const button = document.getElementById('button');
button.onclick = validFormFieldInput;
console.log("WE CAN DO THIS!");
// const taskHtml=createTaskHtml(name, description, assignedTo, dueDate);
// console.log(taskHtml);


console.log(taskManager.tasks);

console.log(taskManager.currentId);

const tasksList = document.querySelector("#tasks-list");

tasksList.addEventListener('click', (event) => { // "event" here is the event parameter
    if (event.target.classList.contains('done-button')) {
        const parentTask = event.target.closest('.card');
        console.log(parentTask); // code for testing
        let taskId = Number(parentTask.dataset.taskId);

        const task = taskManager.getTaskById(taskId);
        task.status = 'DONE';
        
        taskManager.save();
        taskManager.render();
    }

    if (event.target.classList.contains('delete-button')) {
        const parentTask = event.target.closest('.card');
        let taskId = Number(parentTask.dataset.taskId);

        taskManager.deleteTask(taskId);
        taskManager.save();
        taskManager.render();
    }
});

