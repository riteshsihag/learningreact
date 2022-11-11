import { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactContext from '../../Context/reactContext';
import { ChannelViews, ChannelName, Thumbnail, VideoDescription, VideoDetailContainer, VideoInfoContainer, VideoParagraph, ViewsContainer } from './gamingVideoStyle';
class GamingVideo extends Component {
  
  render() {
    const {videoDetails} = this.props
    const {id,title,thumbnailUrl,views} = videoDetails
    return (
      <ReactContext.Consumer>
      {value=>{
        const {isDarkModeOn} = value
        return(
      <Link to={`/video/${id}`}>
     <VideoDetailContainer darkMode={isDarkModeOn}>
        <Thumbnail src={thumbnailUrl}/>
        <VideoInfoContainer>
            <VideoDescription>
                <VideoParagraph>{title}</VideoParagraph>
                <ViewsContainer>
                    <ChannelViews>{views} views</ChannelViews>
                    <ChannelName>Watching Worldwide</ChannelName>
                </ViewsContainer>
            </VideoDescription>
        </VideoInfoContainer>
     </VideoDetailContainer>
     </Link>
      )
    }}
 </ReactContext.Consumer>
    );
  }
}

export default GamingVideo;
