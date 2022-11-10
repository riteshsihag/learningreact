import { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'
import { ContactContainer, ContactHeading, ContactImgContainer, ContactParagraph, NavImg, NavLinkContainer, NavName, SidebarContainer, SideLinkContainer } from './sidebarStyle';
import {AiFillHome} from 'react-icons/ai'
import {ImFire} from 'react-icons/im'
import {IoLogoGameControllerB} from 'react-icons/io'
import {RiPlayListAddLine} from 'react-icons/ri'
import { Img } from '../Navbar/navbarStyle';

class Sidebar extends Component {
  
  render() {

    return (
         <SidebarContainer>
            <SideLinkContainer>
            <NavLinkContainer>
                <AiFillHome/>
                <NavName><Link to={'/'}>Home</Link></NavName>
            </NavLinkContainer>
            <NavLinkContainer>
                 <ImFire/>
                <NavName><Link to={'/trending'}>Trending</Link></NavName>
            </NavLinkContainer>
            <NavLinkContainer>
                <IoLogoGameControllerB/>
                <NavName><Link to={'/gaming'}>Gaming</Link></NavName>
            </NavLinkContainer>
            <NavLinkContainer>
                 <RiPlayListAddLine/>
                <NavName><Link to={'/saved-videos'}>Saved videos</Link></NavName>
            </NavLinkContainer>
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
  }
}
export default withRouter(Sidebar);