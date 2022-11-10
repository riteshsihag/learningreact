import { Component } from 'react';
import { Link } from 'react-router-dom';
import { ChannelViews, ChannelName, Thumbnail, VideoDescription, VideoDetailContainer, VideoInfoContainer, VideoParagraph, ViewsContainer } from './gamingVideoStyle';
class GamingVideo extends Component {
  
  render() {
    const {videoDetails} = this.props
    const {id,title,thumbnailUrl,views} = videoDetails
    return (
      <Link to={`/video/${id}`}>
     <VideoDetailContainer>
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
    );
  }
}

export default GamingVideo;
