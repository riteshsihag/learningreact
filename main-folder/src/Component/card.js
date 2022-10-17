import { Component } from 'react';
import './card.css';
class Card extends Component {
  
 
    render() {
        const { content, deleteUser, onShow } = this.props;
        const { id } = content;
        const onDelete = () => {
            deleteUser(id);
        }
        return (
            <div className='main-container'>

                <div className='name'>
                    <div className='logo'>{this.props.gmail.charAt(0)}</div>
                    <div className='head'>
                        <h1>{this.props.gmail}</h1>
                        <h1>{this.props.username}</h1>
                        <h1>{onShow?this.props.password:". . . . . . . . . . ."}</h1>
                    </div>
                    <img className='delete' onClick={onDelete} src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png" />
                </div>
            </div>
        )
    }
}
export default Card;