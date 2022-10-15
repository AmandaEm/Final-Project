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