import { Component } from 'react';
import './product.css'
class Product extends Component {
 
  render() {
   const {productList} = this.props
    return (
     <>
     <div className='products'>
      <img className='product-img' src={productList.imageUrl}/>
      <h2 className='product-title'>{productList.title}</h2>
      <p className='product-brand'>by {productList.brand}</p>
      <div className='price-rating-container'>
        <p className='product-price'>Rs {productList.price}/-</p>
        <span className='product-rating'>{productList.rating}<img className='rating-icon' src="https://img.icons8.com/material-rounded/24/FFFFFF/hand-drawn-star.png"/></span>
      </div>
     </div>
     </>
    )
  }
}
export default Product;