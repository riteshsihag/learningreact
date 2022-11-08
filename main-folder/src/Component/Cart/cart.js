import { Component } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../CartContext/cartContext';
import Navbar from '../NavBar/navbar';
import './cart.css'
import CartComponent from './cartComponent';
class Cart extends Component {

  render() {

    return (
      <CartContext.Consumer>
        {value => {
          const { cartList } = value
          let amount = 0
          const totalValue = () => {
            for (var i = 0; i < cartList.length; i++) {
              amount = amount + cartList[i].noOfItems * cartList[i].price
            }
            return amount
          }

          return (
            <>
              <Navbar />
              {cartList.length === 0 ?
              <div className='empty'>
                <img  src='https://cdni.iconscout.com/illustration/premium/thumb/confusing-woman-due-to-empty-cart-4558760-3780056.png' /> :
                <button><Link to={'/products'}>Shop Now</Link></button>
                
              </div>:
                <div>
                  
                  <h1 className='cart-heading'>My Cart</h1>
                  <div className='cart'>
                    {cartList.map(item => {
                      return <CartComponent cartItem={item} />
                    })}
                  </div>
                  <div>
                    <div className='order-value'>
                      <span className='order'>Order Total: <h1>Rs {totalValue()}/-</h1></span>
                      <p>{cartList.length} items in cart</p>
                      <button>Checkout</button>
                    </div>
                  </div>
                </div>
              }


            </>
          )
        }}

      </CartContext.Consumer>
    )
  }
}
export default Cart;