import {Component} from 'react';
import './card.css';
class Card extends Component{
   
    render(){
        const {onClickButton} = this.props;
       const onSearch=()=>{
            onClickButton(this.props.element)
           }
        return(
            <div className='main-container'>
            <p>{this.props.element}</p>
            <img onClick={onSearch} src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"/>
            </div>
        )
    }
}
export default Card;