import { Component } from 'react';
import { ChannelName, ViewsContainer } from '../VideoContainer/videoDetailStyle';
import { Subscriber, ChannelContainer, ChannelLogo, ChannelTitle, Dislike, DislikeContainer, Like, LikeContainer, LikeDislikeContainer, Save, SaveContainer, SubscriptionContainer, TitleContainer, VideoTextContainer, VideoTitle, ViewsLikesContainer, Description, ProfileContainer } from './videoTextStyle';
import { BsDot } from 'react-icons/bs'
import { BiLike, BiDislike } from 'react-icons/bi'
import { RiPlayListAddLine } from 'react-icons/ri'
import ReactContext from '../../Context/reactContext';

class VideoText extends Component {
    state = {
        isVideoSaved: false,
        isVideoLiked: false,
        isVideoDisLiked: false
    }
       componentDidMount(){
        const { videoDetails } = this.props
        let myContext = this.context
        let savedVideos = myContext.savedVideos
        let likedVideos = myContext.likedVideos
        let dislikedVideos = myContext.dislikedVideos
        if(savedVideos.find(eachVideo=>eachVideo.id===videoDetails.id)){
            this.setState({isVideoSaved:true})
        }
        if(likedVideos.find(eachVideo=>eachVideo.id===videoDetails.id)){
            this.setState({isVideoLiked:true})
        }
        if(dislikedVideos.find(eachVideo=>eachVideo.id===videoDetails.id)){
            this.setState({isVideoDisLiked:true})
        }
       }
       onSave=()=>{
         this.setState(prevState=>({isVideoSaved: !prevState.isVideoSaved}))
       }
       onLike=()=>{
        this.setState(prevState=>({isVideoLiked: !prevState.isVideoLiked, isVideoDisLiked: false}))
       }
       onDisLike=()=>{
        this.setState(prevState=>({isVideoDisLiked: !prevState.isVideoDisLiked, isVideoLiked: false}))
       }
    render() {
        const { videoDetails } = this.props
        const { id, title, channelName, profileUrl, views, publishedAt, description, subscriber } = videoDetails
        const {isVideoSaved, isVideoLiked,isVideoDisLiked} = this.state
        return (
            <ReactContext.Consumer >
                {value => {
                    const { changeSavedVideos, removeSavedVideo,onDislikeVideo,onLikeVideo,removeDisLikedVideo,removeLikedVideo , isDarkModeOn} = value
                    const onSaveVideo = () => {
                        this.onSave()
                        changeSavedVideos(videoDetails)
                        removeSavedVideo(videoDetails)
                    }
                    const onLikingVideo = ()=>{
                        this.onLike()
                         onLikeVideo(videoDetails)
                         removeLikedVideo(videoDetails)
                    }
                    const onDisLikingVideo = ()=>{
                        this.onDisLike()
                         onDislikeVideo(videoDetails)
                         removeDisLikedVideo(videoDetails)
                    }
                    return (
                        <VideoTextContainer darkMode={isDarkModeOn}>
                            <TitleContainer>
                                <VideoTitle>{title}</VideoTitle>
                                <ViewsLikesContainer>
                                    <ViewsContainer>
                                        <ChannelName>{views} views</ChannelName>
                                        <BsDot style={{ fontSize: '31px', marginTop: '10px' }} />
                                        <ChannelName>{publishedAt}</ChannelName>
                                    </ViewsContainer>
                                    <LikeDislikeContainer>
                                        {isVideoLiked? <LikeContainer>
                                            <BiLike style={{ marginTop: '18px', color:'#3b82f6' }} />
                                            <Like onClick={onLikingVideo} style={{ color:'#3b82f6' }}>Liked</Like>
                                        </LikeContainer>:
                                         <LikeContainer>
                                         <BiLike style={{ marginTop: '18px' }} />
                                         <Like  onClick={onLikingVideo}>Like</Like>
                                     </LikeContainer>
                                        }
                                       {isVideoDisLiked?
                                       <DislikeContainer>
                                       <BiDislike style={{ marginTop: '18px',color:'#3b82f6' }} />
                                       <Dislike style={{ color:'#3b82f6' }}>Disliked</Dislike>
                                   </DislikeContainer>
                                   :
                                   <DislikeContainer>
                                   <BiDislike style={{ marginTop: '18px' }} />
                                   <Dislike onClick={onDisLikingVideo}>Dislike</Dislike>
                               </DislikeContainer>

                                    }
                                       
                                        <SaveContainer>
                                            {isVideoSaved ? <>
                                                <RiPlayListAddLine style={{ marginTop: '18px', color: '#3b82f6' }} />
                                                <Save onClick={onSaveVideo} style={{ color: '#3b82f6' }}>Saved</Save>
                                            </>
                                                :
                                                <>
                                                    <RiPlayListAddLine style={{ marginTop: '18px' }} />
                                                    <Save onClick={onSaveVideo}>Save</Save>
                                                </>
                                            }

                                        </SaveContainer>
                                    </LikeDislikeContainer>
                                </ViewsLikesContainer>
                            </TitleContainer>
                            <ChannelContainer>
                                <ProfileContainer>
                                    <ChannelLogo src={profileUrl} />
                                    <SubscriptionContainer>
                                        <ChannelTitle>{channelName}</ChannelTitle>
                                        <Subscriber>{subscriber} Subscriber</Subscriber>
                                    </SubscriptionContainer></ProfileContainer>
                                <Description>{description}</Description>
                            </ChannelContainer>
                        </VideoTextContainer>)
                }}
            </ReactContext.Consumer>
        );
    }
}
VideoText.contextType = ReactContext
export default VideoText;
