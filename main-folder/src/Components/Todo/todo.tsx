import { inject, observer } from "mobx-react";
import React, { Component } from 'react'
import Tab from "./tab";
import {ReactI18NextChild, withTranslation} from 'react-i18next'

@inject('todoStore')
@observer
class Todo extends Component<any>{
    render() {
        const onCheck=(event:React.ChangeEvent<HTMLInputElement>)=>{
            this.props.todoStore.onCheck(event.target.id)
        }           
        const changeInputText = (event:React.ChangeEvent<HTMLInputElement>) =>{
            this.props.todoStore.changeInputValue(event.target.value)
        }
        
        return (
            <div >
                <input className="text" type={'text'} value={this.props.todoStore.inputValue} onChange={changeInputText} />
                <button onClick={this.props.todoStore.addItem}>{this.props.t('addButton')}</button>
                <Tab/>
                <div className="notes-card">
                    {this.props.todoStore.item.map((item: { id: string | undefined; checked: boolean | undefined; input: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | Iterable<ReactI18NextChild> | null | undefined; }) => {
                        return <div className="card">
                            <div className="input">
                            <input type={'checkbox'} id={item.id} onChange={onCheck} checked={item.checked} />
                            <p>{item.input}</p>
                            </div>
                            <button id={item.id} onClick={()=> this.props.todoStore.deleteItem(item.id)}>{this.props.t('deleteButton')}</button>
                        </div>
                    })}
                </div>
                <button onClick={this.props.todoStore.onSave}>{this.props.t('saveButton')}</button>
            </div>
        )
    }
}

export default withTranslation()(Todo)