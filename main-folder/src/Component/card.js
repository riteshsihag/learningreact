import { Component } from 'react';
import './card.css';
class Card extends Component {
    state=({
        isVisible: false
       })
      
       onshow=()=>{
        this.setState(prevState=>({
          isVisible:!prevState.isVisible
        }))
      }
    render() {
        const {isVisible} = this.state
       
        return (
           <div className='main'>
            <div className='ques'>
                <p className='question'>{this.props.ques}</p>
                <img onClick={this.onshow} src={isVisible?"https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png ":"https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png "}/>
            </div>
            {isVisible ? <p className='answer'>{this.props.ans}</p> : "" }
           </div>
        )
    }
}
export default Card;