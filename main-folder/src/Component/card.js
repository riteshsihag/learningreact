import {Component} from 'react';
import './card.css';
class Card extends Component{
   
    render(){
        const {contentlist , clickImg, isActive} = this.props;
         const changeImg=()=>{
            clickImg(contentlist)
         } 
         const activeImgClassName = isActive ? 'text' :  'text2'
        return(
            <div>
               <h2 className={activeImgClassName} onClick={changeImg}>{this.props.name}</h2>
            </div>
        )
    }
}
export default Card;