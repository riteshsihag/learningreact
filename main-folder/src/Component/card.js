import {Component} from 'react';
import './card.css';
class Card extends Component{
    render(){
        return(
            <div className='main'>
               <img src={this.props.url}/>
               <p>{this.props.name}</p>
            </div>
        )
    }
}
export default Card;