import { Component } from 'react';
import { Logo } from '../Navbar/navbarStyle';
import { BannerButton, BannerContainer, BannerContentContainer, BannerParagraph } from './bannerStyle';
import {GrClose} from 'react-icons/gr'
class Banner extends Component {
  state = {
    removeBanner: false
  }
  onRemoveBanner=()=>{
    this.setState({removeBanner: true})
  }
  render() {
    const {removeBanner} = this.state
    return (
      <BannerContainer remove={removeBanner?'none':'flex'}>
        <BannerContentContainer>
        <Logo src='https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'/>
        <BannerParagraph>Buy Nxt Watch Premium prepaid plans with <br/> UPI</BannerParagraph>
        <BannerButton>GET IT NOW</BannerButton></BannerContentContainer>
        <GrClose onClick={this.onRemoveBanner} style={{marginRight: "50px"}}/>
      </BannerContainer>
    );
  }
}

export default Banner;
