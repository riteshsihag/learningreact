import { Component } from 'react'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import { Img, Logo, LogoutButton, LogoutContainer, NavbarContainer } from './navbarStyle'
import ReactContext from '../../Context/reactContext'
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
          const {toggleDarkMode} = value
          const onToggleDarkMode=()=>{
            this.setState(prevState=>({darkMode: !prevState.darkMode}))
            toggleDarkMode(darkMode)
          }
          return(
            <NavbarContainer>
            <Logo src='https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'/>
           <LogoutContainer>
            <FaMoon onClick={onToggleDarkMode} style={{fontSize: '32px'}}/>
            <Img src='https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png'/>
           <LogoutButton onClick={this.onClickLogout} className='logout-btn'>Logout</LogoutButton>
           </LogoutContainer>
         </NavbarContainer>

          )
        }}
        
         </ReactContext.Consumer>
    )
  }
}
export default withRouter(Navbar);