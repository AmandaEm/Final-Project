/*validFormFieldInput(data) {
    const newTaskNameInput = document.querySelector('#name');
    const name = newTaskNameInput.value;
    console.log("name:  "+name);

    const newTaskNameInput2 = document.querySelector('#description');
    const description = newTaskNameInput2.value;
    console.log("description:  "+description);

    const newTaskNameInput3 = document.querySelector('#assinged');
    const assigned = newTaskNameInput3.value;
    console.log("assigned:  "+assigned);

    const newTaskNameInput4 = document.querySelector('#dueDate');
    const dueDate = newTaskNameInput4.value;
    console.log("dueDate:  "+dueDate);
    
    const newTaskNameInput5 = document.querySelector('#_status');
    const status = newTaskNameInput5.value;
    console.log("status:  "+status);

    const newTaskNameInput6 = document.querySelector('#textarea');
    const textarea = newTaskNameInput6.value;
    console.log("textarea:  "+textarea);


}
*/


const taskManager = new TaskManager();

function addTask(e){

    const newName=document.querySelector('#name');
    const nameError=document.querySelector('#name-error');
    const hasName=requireField(newName,nameError);

    const newDescription=document.querySelector('#description');
    const descriptionError=document.querySelector('#description-error');
    const hasDescription=requireField(newDescription,descriptionError);

    const newAssigned=document.querySelector('#assigned');
    const assignedError=document.querySelector('#assigned-error');
    const hasAssigned=requireField(newAssigned,assignedError);
    
    const newDueDate=document.querySelector('#dueDate');
    const dueDateError=document.querySelector('#dueDate-error');
    const hasDueDate=requireField(newDueDate,dueDateError);

    const newStatus=document.querySelector('#_status');
    const statusError=document.querySelector('#status-error');
    const hasStatus=requireField(newStatus,statusError);

    const isValid = hasName && hasDescription && hasAssigned && hasDueDate && hasStatus;
    if(isValid){
        taskManager.addTask(newName.value, newDescription.value, newAssigned.value, newDueDate.value, newStatus.value);

    }
   
    newName.value="";
    newDescription.value="";
    newAssigned.value="";
    newDueDate.value="";
    newStatus.value="";

} 

function requireField(field, errorField){
    const value = field.value;
    console.log(value);

    
    if (value) {
        errorField.classList.add("invisible");
        return true;
    } else {

        errorField.classList.remove("invisible");
        return false;
    }
}


const button = document.getElementById('button');
button.onclick = addTask;
console.log("Hello");


console.log(taskManager.tasks);

console.log(taskManager.currentId);
  


