import { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Cookies from 'js-cookie'
import './navbar.css'
import CartContext from '../../CartContext/cartContext'
class Navbar extends Component {
  onClickLogout = () => {
    Cookies.remove('jwt_token')
    const { history } = this.props
    history.replace('/login')
  }
  render() {

    return (
      <CartContext.Consumer>
        {value=>{
           const {cartList} = value
         
       return(
      <div className='navbar'>
        <div className='logo'>
          <img src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png' />
        </div>
        <div className='navigations'>
          <p><Link to={'/'}>Home</Link> </p>
          <p> <Link to={'/products'}>Products</Link> </p>
          <p> <Link to={'/cart'}>Cart {cartList.length===0?'':<span className='cart-no'>{cartList.length}</span>}</Link> </p>
          <button onClick={this.onClickLogout} className='logout-btn'>Logout</button>
        </div>
      </div> )}}
      </CartContext.Consumer>
    )
  }
}
export default withRouter(Navbar);