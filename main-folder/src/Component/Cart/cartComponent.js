import { Component } from 'react';
import CartContext from '../../CartContext/cartContext';
import './cart.css'
class CartComponent extends Component {
 
  render() {

    return (
      <CartContext.Consumer>
        {value => {
          const { decreaseItem, increaseItem ,totalCartValue} = value
          const {cartItem} = this.props

          const onDecreaseItem=()=>{
            decreaseItem(cartItem.id)
            totalCartValue()
          }
          const onIncreaseItem=()=>{
            increaseItem(cartItem.id)
            totalCartValue()
          }
          return (
            <>
                <div className='cart-container'>
                  <div className='product-info'>
                    <img className='cart-img' src={cartItem.imageUrl} />
                    <div>
                      <h3>{cartItem.title}</h3>
                      <p>by {cartItem.brand}</p>
                    </div>
                  </div>
                  <div className='setItem'>
                    <p className='decrease' onClick={onDecreaseItem}>-</p>
                    <p className='count'>{cartItem.noOfItems}</p>
                    <p className='increase' onClick={onIncreaseItem}>+</p>
                  </div>
                  <p>Rs {cartItem.noOfItems*cartItem.price}</p>
                </div>
            </>
          )
        }}

      </CartContext.Consumer>
    )
  }
}
export default CartComponent;