import { Component } from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom'
// import './product.css'
class Similar extends Component {
 
  render() {
   const {productList} = this.props
   const {history} = this.props 
    return (
      
     <div onClick={()=>history.push(`/products/${productList.id}`)} className='products'>
      <img className='product-img' src={productList.imageUrl}/>
      <h2 className='product-title'>{productList.title}</h2>
      <p className='product-brand'>by {productList.brand}</p>
      <div className='price-rating-container'>
        <p className='product-price'>Rs {productList.price}/-</p>
        <span className='product-rating'>{productList.rating}<img className='rating-icon' src="https://img.icons8.com/material-rounded/24/FFFFFF/hand-drawn-star.png"/></span>
      </div>
     </div>
     
    )
  }
}
export default withRouter(Similar);