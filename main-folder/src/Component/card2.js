import {Component} from 'react';
import './card.css';
class Card2 extends Component{
   
    render(){
          
        return(
            <div className='main'>
               <img className='bigimg' src={this.props.url}/>
            </div>
        )
    }
}
export default Card2;