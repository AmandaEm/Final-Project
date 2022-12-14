const createTaskHtml = (id, name, description, assignedTo, dueDate, status) =>
`<div class="card" data-task-id="${id}">
   <div class="card-header">
     Task 
   </div>
   <div class="list">
   <ul class="list-group  list-group-flush">
     <p class="list-group-item">Name: ${name}</p>
     <p class="list-group-item">Description: ${description}</p>
     <p class="list-group-item">Assigned to: ${assignedTo} </p>
     <p class="list-group-item">Due date: ${dueDate}</p>
     <p class="list-group-item">Status: ${status}</p>
   </ul>
 </div>
   <div class="card-footer">
     <button type="button" class="btn btn-success done-button">Mark As Done</button>
     <button type="button" class="btn btn-primary delete-button">Delete</button>
   </div>
 </div>`;

class TaskManager{
   constructor(currentId=0) {
       this.currentId=currentId;
       this.tasks=[];
   }

  addTask(name, description, assignedTo, dueDate, status) {
    this.currentId = this.currentId + 1;
    const task = {
      id: this.currentId,
      name: name,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: 'TODO', // default value for a new created task
      textarea: textarea
    };
    this.tasks.push(task);
  }

  //add getTaskById() method
  getTaskById(taskId) {
    let foundTask;
    for (let i = 0; i < this.tasks.length; i++) {
      let task;
      task = this.tasks[i];
      if (task.id === taskId) {
        foundTask = task;
        return foundTask;
      }
    }
  }

  deleteTask(taskId) {
    const newTasks = [];
    for (let i = 0; i < this.tasks.length; i++) {
      let task;
      task = this.tasks[i];
      if (task.id != taskId) {
        newTasks.push(task);
      }
    }
    this.tasks = newTasks;
  }

  render() {
    const tasksHtmlList = [];
    for (const task of this.tasks) {
      const date = new Date(task.dueDate);
      const formattedDate = date.toDateString();
      const taskHtml = createTaskHtml(task.id, task.name, task.description, task.assignedTo, formattedDate, task.status);
      tasksHtmlList.push(taskHtml);
    }
    const tasksHtml = tasksHtmlList.join("\n");
    const taskListElement = document.getElementById('tasks-list');
    taskListElement.innerHTML = tasksHtml;
  }

   save(){
    const taskJson = JSON.stringify(this.tasks)
    localStorage.setItem('tasks', taskJson)
    const currentId = String(this.currentId)
    localStorage.setItem('currentId', currentId)
   } 

   load(){
    const tasksJson = localStorage.getItem('tasks')
    if (tasksJson) {
      this.tasks = JSON.parse(tasksJson);
    }
    const currentId = localStorage.getItem('currentId')
    if (currentId) {
      this.currentId = +currentId;
    }
   }
 }

 module.exports =  TaskManager;