const createTaskHtml= (name, description, assignedTo, dueDate)=> 
    `<div class="card">
   <div class="card-header">
     Task 1
   </div>
   <div class="list">
   <ul class="list-group  list-group-flush">
     <p class="list-group-item">Name: ${name}</p>
     <p class="list-group-item">Description: ${description}</p>
     <p class="list-group-item">Assigned to: ${assignedTo} </p>
     <p class="list-group-item">Due date: ${dueDate}</p>
   </ul>
 </div>
   <div class="card-footer">
     <button type="button" class="btn btn-success">In progress</button>
     <button type="button" class="btn btn-primary">Delete</button>
   </div>
 </div>`;

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
    for (const task of this.tasks) {

     const date =new Date(task.dueDate);
     const formattedDate = date.toDateString();
     const taskHtml = createTaskHtml(task.name, task.description, task.assignedTo, formattedDate);
     tasksHtmlList.push(taskHtml);
      
    }
    const tasksHtml = tasksHtmlList.join("\n");
    const taskListElement = document.getElementById('tasks-list');
    taskListElement.innerHTML = tasksHtml;
   }
   
  
}