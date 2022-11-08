import Cookies from 'js-cookie';
import { Component } from 'react';
import Navbar from '../NavBar/navbar';
import Similar from '../SimilarProduct/similar';
import { ThreeDots } from 'react-loader-spinner';
import CartContext from '../../CartContext/cartContext';
import './display.css'

const apiStatusConstants = {
    initial: 'INITIAL',
    failure: 'FAILURE',
    success: 'SUCCESS',
    inProgress: 'INPROGRESS'
}


class Details extends Component {
    state = {
        allDetails: {},
        isLoading: false,
        apiStatus: apiStatusConstants.initial,
        noOfItems: 1,
    }

    componentDidMount() {
        this.getProducts()
    }
    getProducts = async () => {
        this.setState({ apiStatus: apiStatusConstants.inProgress })
        const { match } = this.props
        const { params } = match
        const { id } = params
        const url = `https://apis.ccbp.in/products/${id}`
        const jwtToken = Cookies.get('jwt_token')
        const options = {
            method: 'GET',
            headers: { Authorization: `Bearer ${jwtToken}`, }
        }
        const response = await fetch(url, options)
        if (response.ok === true) {
            const data = await response.json()

            const updatedData = {
                title: data.title,
                brand: data.brand,
                price: data.price,
                id: data.id,
                imageUrl: data.image_url,
                rating: data.rating,
                totalReviews: data.total_reviews,
                availability: data.availability,
                description: data.description,
                similarProducts: data.similar_products
            }
            this.setState({ allDetails: updatedData, apiStatus: apiStatusConstants.success })
        }
        else {
            this.setState({ apiStatus: apiStatusConstants.failure })
        }
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
    renderSimilarProducts = () => {
        const { allDetails } = this.state
        return allDetails.similarProducts.map((item) => {
            return (<Similar key={item.id} productList={item} />)
        })
    }
    renderAllDetails = () => {
        return (
            <CartContext.Consumer>
                {(value) => {
                    const { allDetails, noOfItems } = this.state
                    const { addCartItem, cartList, increaseItem } = value;
                   
                    const onClickAddToCart = () => {
                      
                      if(cartList.find(item => item.id==allDetails.id)){
                                 increaseItem(allDetails.id)                 
                      }
                        else {
                            return addCartItem({ ...allDetails, noOfItems });
                         }

                    };
                    return (
                        <>
                            <Navbar />
                            <>
                                <div className='product-detail'>
                                    <img className='main-img' src={allDetails.imageUrl} />
                                    <div className='alldetails'>
                                        <h1>{allDetails.title}</h1>
                                        <p>Rs {allDetails.price}/-</p>
                                        <div className='rating-review'>
                                            <span className='product-rating'>{allDetails.rating}<img className='rating-icon' src="https://img.icons8.com/material-rounded/24/FFFFFF/hand-drawn-star.png" /></span>
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
                                        <button className='add-btn' onClick={onClickAddToCart}>Add to Cart</button>
                                    </div>
                                </div>

                            </>
                            <div>
                                <h1 id='product-heading'>Similar Products</h1>

                                <div className='similar-container'>
                                    {this.renderSimilarProducts()}

                                </div>
                            </div>

                        </>
                    )
                }
                }
            </CartContext.Consumer>)
    }
    render() {
        const { apiStatus } = this.state
        switch (apiStatus) {
            case apiStatusConstants.success:
                return (this.renderAllDetails())

            case apiStatusConstants.failure:
                return <div>
                    <h1>Failed</h1>
                </div>
            case apiStatusConstants.inProgress:
                return <div className='loader'>
                    <ThreeDots color="#0b69ff" height="50" width="50" />
                </div>
        }

    }

}

export default Details