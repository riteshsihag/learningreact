import {Component} from 'react';
import './card.css';
class Card2 extends Component{
   
    render(){
          
        return(
            <div className='main'>
               <h2>{this.props.name}</h2>
            </div>
        )
    }
}
export default Card2;