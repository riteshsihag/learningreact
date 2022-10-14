import { Component } from 'react';
import './card.css';
class Card extends Component {

    render() {

        const { content, changeFavorite } = this.props;
        const { id, isFavorite } = content;
        const isLiked = () => {
            changeFavorite(id);
        }
        const check = isFavorite ? "https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png" : "https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png"
        return (
            <div className='main-container'>

                <div className='name'>
                    <div className='head'>
                        <h1>{this.props.naam}</h1>
                        <img className='like' onClick={isLiked} src={check} />
                    </div>
                    <p className='date'>Date: {this.props.date}</p>
                </div>

            </div>
        )
    }
}
export default Card;