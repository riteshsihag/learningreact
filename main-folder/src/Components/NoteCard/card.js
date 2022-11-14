
const Card = (props) =>{
   const {notesList} = props
   const {heading,paragraph} = notesList
    return(
       
        <div className="card">
        <h4>{heading}</h4>
        <p>{paragraph}</p>
       </div>

       
      
    )
}
export default Card