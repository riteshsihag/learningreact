import {AiFillDelete} from 'react-icons/ai'
const Card = (props) => {
    const {deleteTask,check,checked} = props
    const ondelete =()=>{
    deleteTask(props.id)
    }
   const onChecked=(event)=>{
    check(event.target.id)
   }
  
    
    return (
        <div>
            <input onChange={onChecked} id={props.id} type={'checkbox'} checked={checked}/>
            <div className="list-element">
            <p>{props.task}</p>
            <AiFillDelete onClick={ondelete}/>
            </div>
        </div>

    )
}
export default Card