import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Card from '../TodoCard/card';
const Todo = () => {
    const localList = JSON.parse(localStorage.getItem("task"))
    const [task, setTask] = useState('')
    const [taskList, setTaskList] = useState(localList)
    const changeTask = (event) => {
        setTask(event.target.value)
    }
    const addTask = (event) => {
        event.preventDefault();
        const newList = {
            id: uuidv4(),
            task,
            checked: false
        }
        setTaskList(prevTaskList => ([...prevTaskList, newList]))
        setTask("")
    }
   const onSave=()=>{
    localStorage.setItem("task", JSON.stringify(taskList))
   }
   

    const deleteTask = (id) => {
        setTaskList(taskList.filter(eachTask => {
            return id !== eachTask.id
        }))
    }
    const check=(value)=>{
         
        setTaskList(prevTaskList=>(prevTaskList.map(eachTask=>{
            if(value===eachTask.id){
                return {...eachTask, checked: !eachTask.checked}
            }
            return eachTask
        })))
    }
    return (
        <div>
            <div className="input-container">
                <h3>Create Task</h3>
                <input value={task} onChange={changeTask} placeholder="What need to be done" />
                <button onClick={addTask}>Add</button>
            </div>
            <div className='list-container'>
                <h3>My Tasks</h3>
                {taskList.map(task => {
                    return <Card id={task.id} deleteTask={deleteTask} check={check} checked={task.checked} key={task.id} task={task.task} />
                })}
            </div>
            <button onClick={onSave}>Save</button>
        </div>

    )
}
export default Todo