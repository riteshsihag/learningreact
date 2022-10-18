import {Component} from 'react';
import './card.css';
class Card3 extends Component{
   
    render(){
        return(
            <div className='main'>
               <img src={this.props.url}/>
            </div>
        )
    }
}
export default Card3;