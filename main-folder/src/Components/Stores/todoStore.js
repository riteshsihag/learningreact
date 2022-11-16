import { makeAutoObservable } from "mobx";
import {v4 as uuidv4} from 'uuid'
class todoStore {

    inputValue = "";
    todoList = JSON.parse(localStorage.getItem("todoList"));

    constructor() {
        makeAutoObservable(this);
    
      }

    changeInputValue=(event)=>{
        this.inputValue=event.target.value
    }
    addItem=()=>{
        const newList = {
            id: uuidv4(),
            input: this.inputValue
        }
        this.inputValue=""
        this.todoList.push(newList)
    }
    deleteItem=(event)=>{
     this.todoList= this.todoList.filter(item=>(item.id!==event.target.id))
    }
    onSave=()=>{
        localStorage.setItem("todoList",this.todoList)
    }
}
export default new todoStore();
