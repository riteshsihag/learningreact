import {Component} from 'react';
import './card.css';
class Card extends Component{
    render(){
        const {content, deleteUser} = this.props;
        const {id} = content;
        console.log(content);
       const onDelete = () =>{
            deleteUser(id);
           
        }
        return(
            <div className='main'>
              <p>{this.props.para}</p>
              <button  onClick={onDelete}>Delete</button>
            </div>
        )
    }
}
export default Card;