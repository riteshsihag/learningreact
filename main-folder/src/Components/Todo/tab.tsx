import { observer } from "mobx-react";
import React from 'react'
import todoStore from "../Stores/todoStore";
import { useTranslation } from "react-i18next";

const Tab = observer(()=>{
        const {t,ready} = useTranslation()
        if (!ready) return <>'loading translations...'</>;
        const TabValues: {id:string,name:string}[] = t('tabList', {returnObjects: true})
        const todoValues = todoStore;
        const sendItemId=(event:React.MouseEvent<HTMLDivElement>)=>{
          todoValues.selectId((event.target as Element).id)
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