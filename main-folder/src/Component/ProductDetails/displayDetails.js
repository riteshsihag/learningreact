import { Component } from 'react';
// import './details.css'

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
                    <img src={allDetails.imageUrl} />
                    <div className='alldetails'>
                        <h1>{allDetails.title}</h1>
                        <p>{allDetails.price}</p>
                        <div className='rating-review'>
                            <p>{allDetails.rating}</p>
                            <p>{allDetails.totalReviews}</p>
                        </div>
                        <p>{allDetails.description}</p>
                        <p>Available {allDetails.availability}</p>
                        <p>Brand {allDetails.brand}</p>
                        <div className='setItem'>
                            <p onClick={this.decreaseItem}>-</p>
                            <p>{noOfItems}</p>
                            <p onClick={this.increaseItem}>+</p>
                        </div>
                        <button>Add to Cart</button>
                    </div>
                </div>

            </>
        )

    }

}

export default ProductDetail;