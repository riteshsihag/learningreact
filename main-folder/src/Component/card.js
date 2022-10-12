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
                <p>{this.props.time}</p>
                <div className='content'>
                <p>{this.props.para}</p>
              <p className='web'>{this.props.web}</p>
                </div>
            <img onClick={onDelete} src="https://assets.ccbp.in/frontend/react-js/delete-img.png"/>

            </div>
        )
    }
}
export default Card;