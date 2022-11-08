import { Component } from 'react';
import CartContext from '../../CartContext/cartContext';
import './cart.css'
import {MdCancel} from 'react-icons/md'
class CartComponent extends Component {
 
  render() {

    return (
      <CartContext.Consumer>
        {value => {
          const { decreaseItem, increaseItem, deleteCartItem } = value
          const {cartItem} = this.props
          
          const onDecreaseItem=()=>{
            decreaseItem(cartItem.id)
          }
          const onIncreaseItem=()=>{
            increaseItem(cartItem.id)
          }
          const deleteItem=()=>{
            deleteCartItem(cartItem.id)
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
                  <div className='delete-item'>
                  <p>Rs {cartItem.noOfItems*cartItem.price}</p>
                  <MdCancel onClick={deleteItem}/>
                  </div>
                  
                </div>
            </>
          )
        }}

      </CartContext.Consumer>
    )
  }
}
export default CartComponent;