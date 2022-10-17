function createTaskHtml (name, description, assignedTo, dueDate, _status, textarea) {
   name = `<div class="form-group">
    <label for="exampleFormControlInput1">Name</label>
    <input type="text" class="form-control" id="name" placeholder="Name">
    <div id="name-error" class="alert alert-danger invisible"  role="alert">
      Input your name!
    </div>`;
   description = `<div class="form-group">
    <label for="exampleFormControlSelect1">Description</label>
    <input type="text" class="form-control" id="description" placeholder="Description">
    <div id="description-error" class="alert alert-danger invisible"  role="alert">
      Input your description!
    </div>
  </div>`;

  assignedTo = `<div class="form-group">
   <label for="exampleFormControlSelect2">Assigned To</label>
   <input type="text" class="form-control" id="assigned" placeholder="Assigned to">
   <div id="assigned-error" class="alert alert-danger invisible"  role="alert">
     Input who you want to assigned to! 
   </div>
 </div>`;
   dueDate = `<div class="form-group">
   <label for="exampleFormControlSelect2">Due Date</label>
   <input type="text" class="form-control" id="dueDate" placeholder="Due Date">
   <div id="dueDate-error" class="alert alert-danger invisible"  role="alert">
     Input your due date!
   </div>
 </div>`;
   _status = `<div class="form-group">
   <label for="exampleFormControlSelect1">Status</label>
   <select class="form-control" id="_status" placeholder="Status">
   <div id="status-error" class="alert alert-danger invisible"  role="alert">
       <option selected>Task Status</option>
       <option value="1">TODO</option>
       <option value="2">IN PROGRESS</option>
       <option value="3">REVIEW</option>
       <option value="4">DONE</option>
     </select>
   </div>
   </div>`;
    textarea = `</div>
   <div class="form-group">
     <label for="exampleFormControlTextarea1">Description</label>
     <textarea class="form-control" id="textarea" rows="3"></textarea>
   </div>`;

   const html = `${name}${description}${assignedTo}${dueDate}${_status}`
   return html 
   const taskHtml = createTaskHtml('Tim', 'Wash dishes', 'Tim', '10/31/2022', 'In Progress')
   console.log(taskHtml);
   
}


class TaskManager{
    constructor(currentId=0) {
        this.currentId=currentId;
        this.tasks=[];
    }

    addTask(name,description,assignedTo,dueDate,_status){
        this.currentId=this.currentId+1;
        const task = {
            id: this.currentId,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: 'TODO'
        }; 
        this.tasks.push(task);
    }
}