import { Component } from 'react'
import { Link, withRouter,RouteComponentProps } from 'react-router-dom'
import Cookies from 'js-cookie'
import './navbar.css'
import { AiFillHome } from 'react-icons/ai';
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import {withTranslation} from 'react-i18next'

class Navbar extends Component<any> {
  onClickLogout = () => {
    Cookies.remove('jwt_token')
    const { history } = this.props
    history.replace('/login')
  }
  render() {

    return (
      <div className='navbar'>
        <div className='logo'>
          <img src='https://assets.ccbp.in/frontend/react-js/logo-img.png' />
        </div>
        <div className='desktop-nav'>
          <div className='navigations'>
            <p><Link to={'/'}>{this.props.t('navbarHome')}</Link> </p>
            <p> <Link to={'/jobs'}>{this.props.t('navbarJob')}</Link> </p>
          </div>
          <div className='logout'>
            <button onClick={this.onClickLogout} className='logout-btn'>{this.props.t('navbarLogout')}</button>
          </div>
        </div>
        <div className="mobile-nav">
          <Link to="/">
            <AiFillHome className="mobile-nav-icon" />
          </Link>

          <Link to="/jobs">
            <BsFillBriefcaseFill className="mobile-nav-icon" />
          </Link>
          <FiLogOut
            onClick={this.onClickLogout}
            className="mobile-nav-icon"
          />
        </div>
      </div>
    )
  }
}
export default withTranslation()(withRouter(Navbar));