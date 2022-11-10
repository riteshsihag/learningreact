import { Component } from 'react';
import { ChannelName, ViewsContainer } from '../VideoContainer/videoDetailStyle';
import {Subscriber, ChannelContainer, ChannelLogo, ChannelTitle, Dislike, DislikeContainer, Like, LikeContainer, LikeDislikeContainer, Save, SaveContainer, SubscriptionContainer, TitleContainer, VideoTextContainer, VideoTitle, ViewsLikesContainer, Description, ProfileContainer } from './videoTextStyle';
import { BsDot } from 'react-icons/bs'
import { BiLike, BiDislike } from 'react-icons/bi'
import { RiPlayListAddLine } from 'react-icons/ri'
import ReactContext from '../../Context/reactContext';

class VideoText extends Component {
     
    render() {
        const { videoDetails } = this.props
        const { id, title, channelName, profileUrl, views, publishedAt, description, subscriber } = videoDetails
        return (
            <ReactContext.Consumer >
                {value=>{
                 const {changeSavedVideos, isVideoSaved, removeSavedVideo} = value
                 const onSaveVideo=()=>{
                    changeSavedVideos(videoDetails)
                    removeSavedVideo(videoDetails)
                 }
               return(
            <VideoTextContainer>
                <TitleContainer>
                    <VideoTitle>{title}</VideoTitle>
                    <ViewsLikesContainer>
                        <ViewsContainer>
                            <ChannelName>{views} views</ChannelName>
                            <BsDot style={{ fontSize: '31px', marginTop: '10px' }} />
                            <ChannelName>{publishedAt}</ChannelName>
                        </ViewsContainer>
                        <LikeDislikeContainer>
                            <LikeContainer>
                                <BiLike style={{marginTop:'18px'}} />
                                <Like>Like</Like>
                            </LikeContainer>
                            <DislikeContainer>
                                <BiDislike style={{marginTop:'18px'}}/>
                                <Dislike>Dislike</Dislike>
                            </DislikeContainer>
                            <SaveContainer>
                                {isVideoSaved?  <>
                                 <RiPlayListAddLine style={{marginTop:'18px', color: '#3b82f6'}}/>
                                <Save onClick={onSaveVideo} style={{color:'#3b82f6'}}>Saved</Save>
                                </>
                                :
                                <>
                                 <RiPlayListAddLine style={{marginTop:'18px'}}/>
                                <Save onClick={onSaveVideo}>Save</Save>
                                </>
                                }
                               
                            </SaveContainer>
                        </LikeDislikeContainer>
                    </ViewsLikesContainer>
                </TitleContainer>
                <ChannelContainer>
                    <ProfileContainer>
                    <ChannelLogo src={profileUrl}/>
                    <SubscriptionContainer>
                        <ChannelTitle>{channelName}</ChannelTitle>
                        <Subscriber>{subscriber} Subscriber</Subscriber>
                    </SubscriptionContainer></ProfileContainer>
                    <Description>{description}</Description>
                </ChannelContainer>
            </VideoTextContainer> )}}
            </ReactContext.Consumer>
        );
    }
}

export default VideoText;
