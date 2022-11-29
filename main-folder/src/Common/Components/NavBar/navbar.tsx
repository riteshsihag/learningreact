import { Component } from 'react'
import { Link, withRouter,RouteComponentProps } from 'react-router-dom'
import Cookies from 'js-cookie'
import './navbar.css'
import { AiFillHome } from 'react-icons/ai';
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import {withTranslation} from 'react-i18next'
import { propsType } from '../../Stores/types';

class Navbar extends Component<RouteComponentProps&propsType>{
  onClickLogout = () => {
    Cookies.remove('jwt_token')
    const { history } = this.props
    history.replace('/login')
  }
  render() {

    return (
      <div className='navbar'>
        <div className='logo'>
          <img src='https://assets.ccbp.in/frontend/react-js/logo-img.png' alt='' />
        </div>
        <div className='desktop-nav'>
          <div className='navigations'>
            <p data-testid = "Home"><Link to={'/'}>{this.props.t('navbarHome')}</Link> </p>
            <p data-testid = "NavJob"> <Link to={'/jobs'}>{this.props.t('navbarJob')}</Link> </p>
          </div>
          <div className='logout'>
            <button onClick={this.onClickLogout} data-testid="logout" className='logout-btn'>{this.props.t('navbarLogout')}</button>
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