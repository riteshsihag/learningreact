import { computed, decorate, toJS } from "mobx";
import { observable, action } from "mobx";
import { v4 as uuidv4 } from 'uuid'
import { getLocalStoreItem, setLocalStoreItem } from "../../util";
type todoList = {
    id: string;
    input: string;
    checked: boolean;
}
type todo = {
    inputValue: string;
    selectedId: string;
    
}
class todoStore implements todo {

    inputValue = ""
    todoList: todoList[] = []
    selectedId = ''
    constructor() {
        if(getLocalStoreItem("todoList") !== null) {
            this.todoList = getLocalStoreItem("todoList")
        }
    }
    get item() {
        switch (this.selectedId) {
            case '1':
                return this.todoList
            case '2':
                return this.todoList.filter(item => item.checked === true)
            case '3':
                return this.todoList.filter(item => item.checked === false)
            default:
                return this.todoList
        }
    }
    selectId = (id:string) => {
        this.selectedId = id
        console.log(this.item)
    }
    changeInputValue = (value:string) => {
        this.inputValue = value
    }
    addItem = () => {
        const newList = {
            id: uuidv4(),
            input: this.inputValue,
            checked: false
        }
        this.inputValue = ""
        this.todoList.push(newList)
    }
    onCheck = (value:string) => {
        this.todoList = this.todoList.map(item => {
            if (item.id === value) {
                return { ...item, checked: !item.checked }
            }
            return item
        }
        )
    }
    deleteItem = (value:string) => {
        this.todoList = this.todoList.filter(item => (item.id !== value))
    }
    onSave = () => {
        setLocalStoreItem("todoList", JSON.stringify(this.todoList))
    }
}
decorate(todoStore, {
    inputValue: observable,
    todoList: observable,
    changeInputValue: action,
    onCheck: action.bound,
    onSave: action.bound,
    deleteItem: action,
    addItem: action,
    item: computed,
    selectId: action,
    selectedId: observable
})
export default new todoStore();
