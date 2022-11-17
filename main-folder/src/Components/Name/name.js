import { observer } from 'mobx-react'
import React from 'react'
import reactionStore from '../../Stores/reactionStore'

const Name = observer(() =>{
    const ReactionValues = reactionStore

    return(
        <>
   <h1>{ReactionValues.course.courseName}</h1>
        </>
    )
})
export default Name