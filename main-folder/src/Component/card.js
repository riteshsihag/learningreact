import {Component} from 'react';
import './card.css';
class Card extends Component{
   
    render(){
        const {remaining} = this.props;
       const deducted = () =>{
        remaining(this.props.rupees);
        }
        return(
            <div className='main'>
             <button onClick={deducted}>{this.props.rupees}</button>
            </div>
        )
    }
}
export default Card;