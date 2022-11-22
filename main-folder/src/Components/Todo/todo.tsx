import { observer } from "mobx-react";
import React, { Component } from 'react'
import todoStore from "../Stores/todoStore";
import Tab from "./tab";
import {withTranslation} from 'react-i18next'

class Todo extends Component<any>{
    render() {
        const todoValues = todoStore;
        const onCheck=(event:React.ChangeEvent<HTMLInputElement>)=>{
            todoValues.onCheck(event.target.id)
        }           
        
        return (
            <div >
                <input className="text" type={'text'} value={todoValues.inputValue} onChange={todoValues.changeInputValue} />
                <button onClick={todoValues.addItem}>{this.props.t('addButton')}</button>
                <Tab/>
                <div className="notes-card">
                    {todoValues.item.map(item => {
                        return <div className="card">
                            <div className="input">
                            <input type={'checkbox'} id={item.id} onChange={onCheck} checked={item.checked} />
                            <p>{item.input}</p>
                            </div>
                            <button id={item.id} onClick={()=> todoValues.deleteItem(item.id)}>{this.props.t('deleteButton')}</button>
                        </div>
                    })}
                </div>
                <button onClick={todoValues.onSave}>{this.props.t('saveButton')}</button>
            </div>
        )
    }
}

export default withTranslation()(observer(Todo))