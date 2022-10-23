const assert = require('assert');
const TaskManager = require('../JS/taskManager')
describe('Testing addTask() method that add to a task to array',  ()=> {
           
let myUserArray =[{id:"1",name:"test",description:"ok",assignedTo:"test",dueDate:"11/20/2022",status: 'TODO',textarea: "textarea"}];

  describe('add to array', async ()=>{
    it('should return array with object', function () {
      assert.notEqual(new TaskManager("1").addTask("test","ok","test","11/20/2022", "textarea"),myUserArray)  
    });
  });
});