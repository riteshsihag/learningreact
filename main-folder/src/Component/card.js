import { Component } from 'react';
import './card.css';
class Card extends Component {
  state=({
    onShow:false
  })
    render() {
        const {onShow} = this.state
        const { content, deleteUser, random_color } = this.props;
        const { id } = content;
        const onDelete = () => {
            deleteUser(id);
        }
        return (
            <div className='main-container'>

                <div className='name'>
                    <div style={{ backgroundColor: random_color }} className='logo'>{this.props.gmail.charAt(0)}</div>
                    <div className='head'>
                        <h1>{this.props.gmail}</h1>
                        <p>{this.props.username}</p>
                        <p>{onShow?this.props.password:"..........."}</p>
                    </div>
                </div>
                <div className='delete'>
                    <img onClick={onDelete} src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png" />
                </div>
            </div>
        )
    }
}
export default Card;