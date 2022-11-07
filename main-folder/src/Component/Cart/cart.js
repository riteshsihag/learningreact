import { Component } from 'react';
import CartContext from '../../CartContext/cartContext';
import Navbar from '../NavBar/navbar';
import './cart.css'
import CartComponent from './cartComponent';
class Cart extends Component {
 
  render() {

    return (
      <CartContext.Consumer>
        {value => {
          const { cartList} = value
          const amount = 0
          
          for(var i = 0; i<cartList.length; i++){
            amount = amount + cartList[i].noOfItems*cartList[i].price
          }
          return (
            <>
            <Navbar/>
            <div className='cart'>
              {cartList.map(item => {
                return <CartComponent cartItem={item} />
              })}
            </div>
            <div>
              <div>
                <span>Order Total: {amount}<h1>Rs</h1></span>
              </div>
            </div>
            </>
          )
        }}

      </CartContext.Consumer>
    )
  }
}
export default Cart;