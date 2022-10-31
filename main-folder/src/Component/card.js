import {Component} from 'react';
import './card.css';
class Card extends Component{
    render(){
        const {details,displayView} = this.props
        const checkStatus =()=>{
             displayView(details)
        }
        return(
            <div className='main'>
               <img onClick={checkStatus} src={details.link}/>
               <p>{details.heading}</p>
            </div>
        )
    }
}
export default Card;