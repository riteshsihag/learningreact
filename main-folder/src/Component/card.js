import {Component} from 'react';
import './card.css';
class Card extends Component{
    render(){
        return(
            <div className='main'>
              <img className='profile' src={this.props.url}/>
              <p>{this.props.para}</p>
            </div>
        )
    }
}
export default Card;