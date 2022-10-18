function createTaskHtml (name, description, assignedTo, dueDate, _status, textarea) {
 
  const html = `<div class="form-group">
   <label for="exampleFormControlInput1">Name</label>
   <input type="text" class="form-control" id="name" placeholder="Name">
   <div id="name-error" class="alert alert-danger invisible"  role="alert">
    <h5>${name}<h5>
   </div>;
 div class="form-group">
   <label for="exampleFormControlSelect1">Description</label>
   <input type="text" class="form-control" id="description" placeholder="Description">
   <div id="description-error" class="alert alert-danger invisible"  role="alert">
     ${description}
   </div>
 </div>;

<div class="form-group">
  <label for="exampleFormControlSelect2">Assigned To</label>
  <input type="text" class="form-control" id="assigned" placeholder="Assigned to">
  <div id="assigned-error" class="alert alert-danger invisible"  role="alert">
    ${assignedTo}
  </div>
</div>;
  <div class="form-group">
  <label for="exampleFormControlSelect2">Due Date</label>
  <input type="text" class="form-control" id="dueDate" placeholder="Due Date">
  <div id="dueDate-error" class="alert alert-danger invisible"  role="alert">
    Input your due date!
  </div>
</div>
<div class="form-group">
  <label for="exampleFormControlSelect1">Status</label>
  <select class="form-control" id="_status" placeholder="Status">
  <div id="status-error" class="alert alert-danger invisible"  role="alert">
      <option selected>${_status}</option>
      <option value="1">TODO</option>
      <option value="2">IN PROGRESS</option>
      <option value="3">REVIEW</option>
      <option value="4">DONE</option>
    </select>
  </div>
  </div>;
   </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Description</label>
    <textarea class="form-control" id="textarea" rows="3">${textarea}</textarea>
  </div>`;
  return html;
}

const taskHtml = createTaskHtml('Tim', 'Wash dishes', 'Tim', '10/31/2022', 'In Progress');
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