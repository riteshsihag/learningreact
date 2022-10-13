import {Component} from 'react';
import './card.css';
class Card extends Component{
   
    render(){
        const {contentlist , clickImg, isActive} = this.props;
         const changeImg=()=>{
            clickImg(contentlist)
         } 
         const activeImgClassName = isActive ? '' : 'smallimg'
        return(
            <div className='main'>
               <img className={activeImgClassName} onClick={changeImg} src={this.props.url}/>
            </div>
        )
    }
}
export default Card;