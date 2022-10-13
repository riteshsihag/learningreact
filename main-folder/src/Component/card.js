import {Component} from 'react';
import './card.css';
class Card extends Component{
     
    render(){
      
        return( 
               <option value={this.props.name}>{this.props.name}</option>
        )
    }
}
export default Card;