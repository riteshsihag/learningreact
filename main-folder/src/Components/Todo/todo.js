import { observer } from "mobx-react-lite";
import React from 'react'
import todoStore from "../Stores/todoStore";
const Todo = () => {

    const todoValues = todoStore;

    return (
        <div>
            <input type={'text'} value={todoValues.inputValue} onChange={todoValues.changeInputValue} />
            <button onClick={todoValues.addItem}>Add</button>
            <div>
                {todoValues.todoList.map(item => {
                    return <div>
                        <input type={'checkbox'} id={item.id} onChange={todoValues.onCheck} checked={item.checked}/>
                        <p>{item.input}</p>
                        <button id={item.id} onClick={todoValues.deleteItem}>Delete</button>
                    </div>
                })}
            </div>
            <button onClick={todoValues.onSave}>Save</button>
        </div>
    )
}

export default observer(Todo)