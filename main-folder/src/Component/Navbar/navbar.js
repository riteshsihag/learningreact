import { Component } from 'react'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {BsFillSunFill} from 'react-icons/bs'
import { Img, Logo, LogoutContainer, NavbarContainer } from './navbarStyle'
import ReactContext from '../../Context/reactContext'
import LogoutPopUp from '../LogoutPopup/logoutPopup'
import './navbar.css'
import SidebarPopup from '../SideBarPopup/sidePopup'
class Navbar extends Component {
 state={
  darkMode : false
 }
  onClickLogout = () => {
    Cookies.remove('jwt_token')
    const { history } = this.props
    history.replace('/login')
  }
 
  render() {
        const {darkMode} = this.state
    return (
      <ReactContext.Consumer>
        {value=>{
          const {toggleDarkMode, isDarkModeOn} = value
          const onToggleDarkMode=()=>{
            this.setState(prevState=>({darkMode: !prevState.darkMode}))
            toggleDarkMode(darkMode)
          }
          return(
            <NavbarContainer darkMode={isDarkModeOn}>
              {isDarkModeOn?
                          <Logo src='https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'/>
                          :
            <Logo src='https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'/>
              }
           <LogoutContainer>
            {isDarkModeOn? <BsFillSunFill onClick={onToggleDarkMode}  style={{fontSize: '32px', color: 'white'}}/>:
            <FaMoon onClick={onToggleDarkMode} style={{fontSize: '32px'}}/>
            }
            <Img src='https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png'/>
            <SidebarPopup/>
            <LogoutPopUp onClickLogout={this.onClickLogout}/>
           </LogoutContainer>
         </NavbarContainer>

          )
        }}
        
         </ReactContext.Consumer>
    )
  }
}
export default withRouter(Navbar);