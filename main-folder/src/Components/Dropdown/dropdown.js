import { observer } from 'mobx-react'
import React from 'react'
import reactionStore from '../../Stores/reactionStore'
const DropdownValue = [
    {
        id: 1,
        courseName: "Mobx"
    },
    {
        id: 2,
        courseName: "ReactJs"
    },
    {
        id: 3,
        courseName: "JavaScript"
    },


]
const Dropdown = observer(() =>{
    const ReactionValues = reactionStore
  const changeSelectValue=(event)=>{
    ReactionValues.selectValue(event.target.value)
    }
    return(
        <>
        <select onChange={changeSelectValue}>
        {DropdownValue.map(item=>{
            return <option value={item.id}>{item.courseName}</option>
        })}
        </select>
        </>
    )
})
export default Dropdown