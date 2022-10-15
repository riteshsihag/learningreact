import { Component } from 'react';
import './card.css';
class Card extends Component {

    render() {
console.log(this.props.title)
        return (
            <tr>
            <td>{this.props.title}</td>
            <td>{this.props.amount}</td>
            <td>{this.props.select}</td>
            <td><img src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "/></td>
            </tr>
        )
    }
}
export default Card;