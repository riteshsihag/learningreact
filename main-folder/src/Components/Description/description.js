import { observer } from 'mobx-react'
import React from 'react'
import reactionStore from '../../Stores/reactionStore'

const Description = observer(() =>{
    const ReactionValues = reactionStore

    return(
        <>
        <h1>{ReactionValues.coursedescription.description}</h1>
        </>
    )
})
export default Description