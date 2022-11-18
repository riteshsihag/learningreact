import { computed, decorate, toJS } from "mobx";
import { observable, action } from "mobx";
import { v4 as uuidv4 } from 'uuid'

class todoStore {

    inputValue = ""
    todoList = []
    selectedId = ''
    constructor() {
        if (localStorage.getItem("todoList") !== null) {
            this.todoList = JSON.parse(localStorage.getItem("todoList"));
        }
    }
    get item() {
        console.log(this.selectedId)
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
    selectId = (id) => {
        this.selectedId = id
        console.log(this.item)
    }
    changeInputValue = (event) => {
        this.inputValue = event.target.value
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
    onCheck = (event) => {
        this.todoList = this.todoList.map(item => {
            if (item.id === event.target.id) {
                return { ...item, checked: !item.checked }
            }
            return item
        }
        )
    }
    deleteItem = (event) => {
        this.todoList = this.todoList.filter(item => (item.id !== event.target.id))
    }
    onSave = () => {
        localStorage.setItem("todoList", JSON.stringify(this.todoList))
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
