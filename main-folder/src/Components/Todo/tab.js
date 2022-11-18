import { observer } from "mobx-react";
import React from 'react'
import todoStore from "../Stores/todoStore";

const TabValues = [
    {
        id:1,
        name: "Show All"
    },
    {
        id:2,
        name:"Show Completed"
    },
    {
        id:3,
        name:"Show Activated"
    }
]
const Tab = observer(()=>{
   
        const todoValues = todoStore;
        const sendItemId=(event)=>{
          todoValues.selectId(event.target.id)
        }
        return (
            <div className="tab-container">
               {TabValues.map(item=>{
                return <div onClick={sendItemId} id={item.id} className="tab">{item.name}</div>
               })}
            </div>
        )
    }
)

export default Tab