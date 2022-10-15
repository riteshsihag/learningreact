import { Component } from 'react';
import './card.css';
class Card extends Component {

    render() {
        const {deleteElement,id} = this.props;
       const onDelete = () =>{
            deleteElement(id);
        }
        return (
            <tr>
            <td>{this.props.title}</td>
            <td>{this.props.amount}</td>
            <td>{this.props.select}</td>
            <td><img onClick={onDelete} src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "/></td>
            </tr>
        )
    }
}
export default Card;