import { makeAutoObservable } from "mobx";

class TodoStore {
    todoTask = [
        {
          'name': 'GAME',
          'content': 'Call of Duty',
          'status':'Finished'
        },
        {
          'name': 'SOCCER',
          'content': 'Manchester United',
          'status':'Pending'
        },
        {
          'name': 'COMIC',
          'content': 'OnePiece',
          'status':'Cancel'
        },
        {
          'name': 'HELLO DARKNESS MY OLD FRIEND',
          'content': 'Attack on Titan',
          'status':'Finished'
        }
      ]
    constructor() {
      makeAutoObservable(this)
    }

    addtask(item) {
        this.todoTask.push({name:item});
        console.log(this.todoTask);
    }

    deleteTask(index) {
        this.todoTask.splice(index, 1);
    }

    editTask = (item, index) => {
        this.todoTask[index].name = item;   
    }

}
  
const myTodo = new TodoStore()

export default myTodo;