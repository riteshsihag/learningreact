import {useState} from 'react'
import Card from '../NoteCard/card'

const Notes = () =>{
 const [heading, setHeading] = useState("")
 const [paragraph, setParagraph] = useState("")
const [notesList, setNotesList] = useState([])
const onChangeHeading=(event)=>{
    setHeading(event.target.value)
}
const onChangePragraph=(event)=>{
    setParagraph(event.target.value)
}
const onAddingNotes=(event)=>{
    event.preventDefault();
    const List = {
      heading,
      paragraph,
    };
    setNotesList((prevNotesList) => [...prevNotesList, List]);
    setHeading("");
    setParagraph("");
}
    return(
       <div className='main-container'>
        <div className='input-container'>
        <input placeholder='Title' value={heading} onChange={onChangeHeading}/><br/>
        <textarea placeholder='Take a Note...' value={paragraph} rows='4' cols={'10'} onChange={onChangePragraph}/><br/>
        <button onClick={onAddingNotes}>Add</button>
        </div>
       <div className='notes-card'>
        {notesList.length===0?
         <div className='note'>
         <img src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"/>
         <h2>No Notes Yet</h2>
         <p>Notes you will add appear here</p>
     </div>
    :
    <>
     {notesList.map(notes=>{
        return <Card notesList={notes}/>
        })}
    </>
   
    }
       
       </div>
       
       </div>
    )
}
export default Notes