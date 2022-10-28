import { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Cookies from 'js-cookie'
import './navbar.css'
class Navbar extends Component {
  onClickLogout = () => {
    Cookies.remove('jwt_token')
    const { history } = this.props
    history.replace('/login')
  }
  render() {

    return (
      <div className='navbar'>
        <div className='logo'>
          <img src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png' />
        </div>
        <div className='navigations'>
          <p><Link to={'/'}>Home</Link> </p>
          <p> <Link to={'/products'}>Products</Link> </p>
          <p> <Link to={'/cart'}>Cart</Link> </p>
          <button onClick={this.onClickLogout} className='logout-btn'>Logout</button>
        </div>
      </div>
    )
  }
}
export default withRouter(Navbar);