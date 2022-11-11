import { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'
import { ContactContainer, ContactHeading, ContactImgContainer, ContactParagraph, NavImg, NavLinkContainer, NavName, SidebarContainer, SideLinkContainer } from './sidebarStyle';
import {AiFillHome} from 'react-icons/ai'
import {ImFire} from 'react-icons/im'
import {IoLogoGameControllerB} from 'react-icons/io'
import {RiPlayListAddLine} from 'react-icons/ri'
import { Img } from '../Navbar/navbarStyle';
import ReactContext from '../../Context/reactContext';

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
class Sidebar extends Component {
  state={
    activeBar: ''
  }
  changeActiveBar=(event)=>{
  this.setState({activeBar: event.target.id})
  }
  render() {

    return (
      <ReactContext.Consumer>
      {value=>{
        const {isDarkModeOn} = value
        return(
         <SidebarContainer darkMode={isDarkModeOn}>
            <SideLinkContainer>
              {SideBarConstants.map(eachBar=>{
                return (
                  <NavLinkContainer id={eachBar.id} onClick={this.changeActiveBar}>
                  {eachBar.icon}
                  <NavName darkMode={isDarkModeOn} ><Link to={eachBar.linkAddress}>{eachBar.name}</Link></NavName>
              </NavLinkContainer>
                )
               
              })}
           
            </SideLinkContainer>
            <ContactContainer>
              <ContactHeading>Contact Us</ContactHeading>
              <ContactImgContainer>
              <Img src='https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png'/>
              <Img src='https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png'/>
              <Img src='https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png'/>
              </ContactImgContainer>
              <ContactParagraph>Enjoy! Now to see your channels and recommendations</ContactParagraph>
            </ContactContainer>
         </SidebarContainer>
          )
        }}
     </ReactContext.Consumer>
    )
  }
}
export default withRouter(Sidebar);