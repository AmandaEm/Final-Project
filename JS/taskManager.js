function createTaskHtml (name, description, assignedTo, dueDate, _status, textarea) {
 
  const html = `<div class="row">
  <div class="card" style="width: 18rem;">
      <div class="card-body">
          <h5 class="card-title text-center">Task</h5>
      <ul class="list-group list-group-flush" id="taskList">
        <li class="list-group-item">${name}</li>
        <li class="list-group-item">${description}</li>
        <li class="list-group-item">${assignedTo}</li>
        <li class="list-group-item">${dueDate}</li>
        <li class="list-group-item">${_status}</li>
        <li class="list-group-item">${textarea}</li>
      </ul>
    </div>
  </div>`;
  return html;
}

const taskHtml = createTaskHtml('Tim', 'Wash dishes', 'Tim', '10/31/2022', 'In Progress', 'get this done');
  console.log(taskHtml);

class TaskManager{
   constructor(currentId=0) {
       this.currentId=currentId;
       this.tasks=[];
   }

   addTask(name,description,assignedTo,dueDate, textarea){
       this.currentId=this.currentId+1;
       const task = {
           id: this.currentId,
           name: name,
           description: description,
           assignedTo: assignedTo,
           dueDate: dueDate,
           status: 'TODO',
           textarea: textarea
       }; 
       this.tasks.push(task);
   }

   render(){
    const tasksHtmlList= []; 
    for (i = 0; i <this.tasks.length; i++) {
     const newTask = this.tasks[1];

     const date = new Date(tasks.dueDate);
     const formattedDate = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();

     const taskHtml = createTaskHtml(task.id, task.name, task.description, task.assignedTo, task.formattedDate, task.status, task.textarea);
     tasksHtmlList.push(taskHtml);
    }
    const tasksHtml = tasksHtmlList.join('\n');
    const tasksList = document.querySelector('tasksList')
    tasksList.innerHTML = tasksHtml;
   }
  
}