import { Component } from 'react';
import { Link } from 'react-router-dom';
import './similar.css'
import {withRouter} from 'react-router-dom'

class Similar extends Component {
 
  render() {
   const {productList} = this.props
  
    return (
      <Link to={`/products/${productList.id}`}>
     <div id='products'>
      <img id='product-img' src={productList.image_url}/>
      <h2 id='product-title'>{productList.title}</h2>
      <p id='product-brand'>by {productList.brand}</p>
      <div id='price-rating-container'>
        <p id='product-price'>Rs {productList.price}/-</p>
        <span id='product-rating'>{productList.rating}<img id='rating-icon' src="https://img.icons8.com/material-rounded/24/FFFFFF/hand-drawn-star.png"/></span>
      </div>
     </div>
     </Link>
    )
  }
}
export default withRouter(Similar);