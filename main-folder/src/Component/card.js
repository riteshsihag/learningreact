import {Component} from 'react';
import './card.css';
class Card extends Component{
     
    render(){
       
        const {content, deleteUser, changeFavorite , random_color} = this.props;
        const {id,isFavorite} = content;
       const onDelete = () =>{
            deleteUser(id);
        }
       const isLiked=()=>{
            changeFavorite(id);
        }
        const btncolor = isFavorite?"like-color":""
        const check = isFavorite?"https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png":"https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
        return(
            <div className='main-container'>

                <div className='name'>
                    <div style={{backgroundColor: random_color}} className='logo'>{this.props.naam.charAt(0)}</div>
        <div className='head'>
        <h1>{this.props.naam}</h1>
              <p>{this.props.comment}</p>
        </div>     
              </div>
              <div className='delete'>
              <div className='like'>
              <img onClick={isLiked} src={check}/>
              <p onClick={isLiked} id={btncolor}>Like</p>
              </div>
              <img className='deleteimg' onClick={onDelete} src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"/>
              </div>
            </div>
        )
    }
}
export default Card;