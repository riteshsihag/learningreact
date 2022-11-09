import { Component } from 'react';
import { ChannelLogo, ChannelName, Thumbnail, VideoDescription, VideoDetailContainer, VideoInfoContainer, VideoParagraph, ViewsContainer } from './videoDetailStyle';
import {BsDot} from 'react-icons/bs'
class VideoDetail extends Component {
  
  render() {
    const {videoDetails} = this.props
    const {id,title,thumbnailUrl,channelName,profileUrl,views,publishedAt} = videoDetails
    return (
     <VideoDetailContainer>
        <Thumbnail src={thumbnailUrl}/>
        <VideoInfoContainer>
            <ChannelLogo src={profileUrl}/>
            <VideoDescription>
                <VideoParagraph>{title}</VideoParagraph>
                <ChannelName>{channelName}</ChannelName>
                <ViewsContainer>
                    <ChannelName>{views} views</ChannelName>
                    <BsDot style={{fontSize: '31px', marginTop: '10px'}}/>
                    <ChannelName>{publishedAt}</ChannelName>
                </ViewsContainer>
            </VideoDescription>
        </VideoInfoContainer>
     </VideoDetailContainer>
    );
  }
}

export default VideoDetail;
