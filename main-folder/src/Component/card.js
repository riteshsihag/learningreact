import { Component } from 'react';
import './card.css';
class Card extends Component {

    render() {
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
        )
    }
}
export default Card;