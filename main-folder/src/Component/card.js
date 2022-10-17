import { Component } from 'react';
import './card.css';
class Card extends Component {

    render() {
<<<<<<< HEAD
       const {getrandomEmoji,id} = this.props;
       const changeImg = () =>{
        getrandomEmoji(id)
       }
        return (
           <div className='emoji' >
            <img onClick={changeImg} src={this.props.url}/>
           </div>
=======
        const {deleteElement,id,amount,select} = this.props;
       const onDelete = () =>{
            deleteElement(id,amount,select);
        }
        return (
            <tr>
            <td>{this.props.title}</td>
            <td>{amount}</td>
            <td>{select}</td>
            <td><img className='img' onClick={onDelete} src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "/></td>
            </tr>
>>>>>>> b530803c4d277184cf77080f67c80c99406563b7
        )
    }
}
export default Card;