import { observer } from "mobx-react";
import React, { Component } from 'react'
import todoStore from "../Stores/todoStore";
import Tab from "./tab";

class Todo extends Component {
    render() {
        const todoValues = todoStore;

        return (
            <div >
                <input className="text" type={'text'} value={todoValues.inputValue} onChange={todoValues.changeInputValue} />
                <button onClick={todoValues.addItem}>Add</button>
                <Tab/>
                <div className="notes-card">
                    {todoValues.item.map(item => {
                        return <div className="card">
                            <div className="input">
                            <input type={'checkbox'} id={item.id} onChange={todoValues.onCheck} checked={item.checked} />
                            <p>{item.input}</p>
                            </div>
                            <button id={item.id} onClick={todoValues.deleteItem}>Delete</button>
                        </div>
                    })}
                </div>
                <button onClick={todoValues.onSave}>Save</button>
            </div>
        )
    }
}

export default observer(Todo)