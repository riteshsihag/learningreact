import todoStore from "./Components/Stores/todoStore";
import { getLocalStoreItem } from "./util";
jest.mock('./util', ()=>{
    return {getLocalStoreItem:()=>[],setLocalStoreItem:()=>[]}
})


test('change input value', ()=>{
    todoStore.changeInputValue('Hello')
    expect(todoStore.inputValue).toBe('Hello')
})

describe("adding item block",()=>{
    beforeAll(()=>{
        todoStore.addItem()
    })
    afterAll(()=>{
        todoStore.deleteItem(todoStore.todoList[0].id)
    })
    test('checking add button', ()=>{
        expect(todoStore.todoList.length).toBe(1)
    })
    
    test('checking onCheck function',()=>{
        todoStore.onCheck(todoStore.todoList[0].id)
        expect(todoStore.todoList[0].checked).toBe(true)
    })
})

test('deleteItem',()=>{ 
    todoStore.addItem()
    todoStore.deleteItem(todoStore.todoList[0].id)
    expect(todoStore.todoList.length).toBe(0)
})
