import { Component } from 'react';
import './display.css'

class ProductDetail extends Component {
    state = {
        noOfItems: 1
    }
    decreaseItem = () => {
        const { noOfItems } = this.state
        if (noOfItems > 1) {
            this.setState((prevState) => ({
                noOfItems: prevState.noOfItems - 1
            }))
        }
    }
    increaseItem = () => {
        this.setState((prevState) => ({
            noOfItems: prevState.noOfItems + 1
        }))
    }
    render() {
        const { allDetails } = this.props
        const { noOfItems } = this.state
        return (
            <>
                <div className='product-detail'>
                    <img className='main-img' src={allDetails.imageUrl} />
                    <div className='alldetails'>
                        <h1>{allDetails.title}</h1>
                        <p>Rs {allDetails.price}/-</p>
                        <div className='rating-review'>
                        <span className='product-rating'>{allDetails.rating}<img className='rating-icon' src="https://img.icons8.com/material-rounded/24/FFFFFF/hand-drawn-star.png"/></span>
                            <p>{allDetails.totalReviews} Reviews</p>
                        </div>
                        <p className='discription'>{allDetails.description}</p>
                        <p>Available: {allDetails.availability}</p>
                        <p className='brand'>Brand: {allDetails.brand}</p>
                        <div className='setItem'>
                            <p className='decrease' onClick={this.decreaseItem}>-</p>
                            <p className='count'>{noOfItems}</p>
                            <p className='increase' onClick={this.increaseItem}>+</p>
                        </div>
                        <button className='add-btn'>Add to Cart</button>
                    </div>
                </div>

            </>
        )

    }

}

export default ProductDetail;