import {Component} from 'react';
import './card.css';
class Card2 extends Component{
   
    render(){
        const {changeImage,Imageid} = this.props;
        const  onChangeImg=()=>{
          changeImage(Imageid)
        }
        return(
            <div className='main'>
               <img onClick={onChangeImg}  src={this.props.url}/>
            </div>
        )
    }
}
export default Card2;