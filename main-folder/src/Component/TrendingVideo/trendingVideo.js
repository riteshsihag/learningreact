import { Component } from 'react';
import { ChannelLogo, ChannelName, Thumbnail, VideoDescription, VideoDetailContainer, VideoInfoContainer, VideoParagraph, ViewsContainer } from './trendingVideoStyle';
import {BsDot} from 'react-icons/bs'
import { Link } from 'react-router-dom';
class TrendingVideo extends Component {
  
  render() {
    const {videoDetails} = this.props
    const {id,title,thumbnailUrl,channelName,views,publishedAt} = videoDetails
    return (
      <Link to={`/video/${id}`}>
     <VideoDetailContainer>
        <Thumbnail src={thumbnailUrl}/>
        <VideoInfoContainer>
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
     </VideoDetailContainer></Link>
    );
  }
}

export default TrendingVideo;
