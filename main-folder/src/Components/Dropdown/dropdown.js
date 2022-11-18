import { observer } from 'mobx-react'
import React, { useEffect } from 'react'
import reactionStore from '../../Stores/reactionStore'
import { autorun, reaction } from 'mobx'

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
const Dropdown = observer(() => {
    const ReactionValues = reactionStore
    const changeSelectValue = (event) => {
        ReactionValues.changeDropDownValue(event.target.value)
    }
    const disposer = autorun(
        () => ReactionValues.selectValue(ReactionValues.dropDownValue)
    )
    useEffect(()=>{
        ReactionValues.selectValue(ReactionValues.dropDownValue)
        return ()=>{
            disposer()
        }
    },[])
    
    return (
        <div className='dropdown'>
            <select onChange={changeSelectValue}>
                {DropdownValue.map(item => {
                    return <option key={item.id} value={item.id}>{item.courseName}</option>
                })}
            </select>
        </div>
    )
})
export default Dropdown