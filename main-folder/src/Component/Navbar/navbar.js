import { Component } from 'react'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import { Img, Logo, LogoutButton, LogoutContainer, NavbarContainer } from './navbarStyle'
class Navbar extends Component {
  onClickLogout = () => {
    Cookies.remove('jwt_token')
    const { history } = this.props
    history.replace('/login')
  }
  render() {

    return (
         <NavbarContainer>
            <Logo src='https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'/>
           <LogoutContainer>
            <FaMoon style={{fontSize: '32px'}}/>
            <Img src='https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png'/>
           <LogoutButton onClick={this.onClickLogout} className='logout-btn'>Logout</LogoutButton>
           </LogoutContainer>
         </NavbarContainer>
          
       
    )
  }
}
export default withRouter(Navbar);