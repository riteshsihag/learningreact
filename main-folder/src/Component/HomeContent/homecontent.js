import { Component } from 'react';
import Banner from '../Banner/banner';
import VideoComponent from '../VideoContainer/videoComponent';
import { HomeContentContainer } from './homecontentStyle';

class HomeContent extends Component {
  
    state={
        videoDetails : []
    }

    getVideoDetails=()=>{
        const url = `https://apis.ccbp.in/videos/all?search=`
        const options = {
            method : 'GET',
            
        }
    }
  render() {
    
    return (
     <HomeContentContainer>
     <Banner/>
     <VideoComponent/>
     </HomeContentContainer>
    );
  }
}

export default HomeContent;
