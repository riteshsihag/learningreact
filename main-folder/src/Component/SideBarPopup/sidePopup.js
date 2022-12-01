import Popup from 'reactjs-popup'
import { Component } from "react"
import ReactContext from '../../Context/reactContext';
import {GiHamburgerMenu} from 'react-icons/gi'
import './sidepopup.css'
import {Link, NavLink, withRouter} from 'react-router-dom'
import { NavName, SideLinkContainer } from '../Sidebar/sidebarStyle';
import {AiFillHome} from 'react-icons/ai'
import {ImFire} from 'react-icons/im'
import {IoLogoGameControllerB} from 'react-icons/io'
import {RiPlayListAddLine} from 'react-icons/ri'
const SideBarConstants = [
    {
      id:'1',
      name: 'Home',
      linkAddress: '/',
      icon: <AiFillHome/>
    },
    {
      id:'2',
      name: 'Trending',
      linkAddress: '/trending',
      icon: <ImFire/>
    },
    {
      id:'3',
      name: 'Gaming',
      linkAddress: '/gaming',
      icon: <IoLogoGameControllerB/>
    },
    {
      id:'4',
      name: 'Saved Videos',
      linkAddress: '/saved-videos',
      icon: <RiPlayListAddLine/>
    }
  ]
class SidebarPopup extends Component {
    render(){
        
        return(
            <ReactContext.Consumer>
            {value=>{
              const {isDarkModeOn} = value
              return(
            <div className="popup-container">
            <Popup
              modal
              trigger={
                <GiHamburgerMenu style={{color:`${isDarkModeOn?'white':'black'}`}} className='hamburger'/>
              }
              className={isDarkModeOn?"dark pop":"pop"}
            >
            
              {close => (
                <>
                <p onClick={() => close()} className="close">Close</p>
                <div className="side-container">
                <SideLinkContainer>
              {SideBarConstants.map(eachBar=>{
                return (
                  <NavLink id={isDarkModeOn?"dark":""} exact to={eachBar.linkAddress} className={isActive=> "navLink-container"+ (!isActive?" unselected":"")}>
                 <div className='icon'>{eachBar.icon}</div> 
                  <NavName className='name' darkMode={isDarkModeOn}>{eachBar.name}</NavName>
              </NavLink>
                )
               
              })}
           
            </SideLinkContainer>
                </div> 
          </>

              )}
            </Popup>
          </div>
           )
        }}
        </ReactContext.Consumer>
        )
    }
   
}
   export default withRouter(SidebarPopup)