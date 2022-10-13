import {Component} from 'react';
import './card.css';
class Card extends Component{
   
    render(){
           const {clickEmoji} = this.props;
          const giveFeedback = () =>{
                clickEmoji()
        }
        return(
            <div className='main'>
               <img onClick={giveFeedback} src={this.props.url}/>
               <p>{this.props.mood}</p>
            </div>
        )
    }
}
export default Card;