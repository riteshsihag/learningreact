import { Component } from 'react'
import './navbar.css'
class Navbar extends Component {
 
  render() {
   
    return (
      <div className='navbar'>
       <div className='logo'>
        <img src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png'/>
       </div>
       <div className='navigations'>
        <p>Home</p>
        <p>Products</p>
        <p>Cart</p>
        <button className='logout-btn'>Logout</button>
       </div>
      </div>
    )
  }
}
export default Navbar;