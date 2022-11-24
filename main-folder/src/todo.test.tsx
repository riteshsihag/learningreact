import todoStore from "./Components/Stores/todoStore";
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
    // test('checking selectedId',()=>{
    // todoStore.addItem()
    // todoStore.addItem()
    // // console.log(todoStore.todoList.filter(item => item.checked === true))
    //     expect(todoStore.item).toStrictEqual(todoStore.todoList.filter(item => item.checked === true))
       
    // })
})

test('deleteItem',()=>{ 
    todoStore.addItem()
    todoStore.deleteItem(todoStore.todoList[0].id)
    expect(todoStore.todoList.length).toBe(0)
})
