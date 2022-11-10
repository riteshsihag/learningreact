import { Component } from 'react';
import Banner from '../Banner/banner';
import VideoDetail from '../VideoContainer/videoComponent';
import { HomeContentContainer, VideoGridContainer } from './homecontentStyle';
import Cookies from 'js-cookie';
import Search from '../Search/search';
import ReactContext from '../../Context/reactContext';

class HomeContent extends Component {

    state = {
        videoDetails: [],
        searchValue: ''
    }
    componentDidMount(){
        this.getVideoDetails();
    }
    getVideoDetails = async () => {
        const {searchValue} = this.state
        const url = `https://apis.ccbp.in/videos/all?search=${searchValue}`
        const jwtToken = Cookies.get('jwt_token')
        const options = {
            method: 'GET',
            headers: { Authorization: `Bearer ${jwtToken}`}
        }
        const response = await fetch(url,options)
        const data = await response.json()
        if(response.ok===true){
            const updatedData = data.videos.map(eachVideo=>({
                id: eachVideo.id,
                title: eachVideo.title,
                thumbnailUrl: eachVideo.thumbnail_url,
                channelName: eachVideo.channel.name,
                profileUrl: eachVideo.channel.profile_image_url,
                views: eachVideo.view_count,
                publishedAt: eachVideo.published_at
            }))
            this.setState({videoDetails: updatedData})
        }
    }
    changeSearchValue=(value)=>{
        this.setState({searchValue: value}, this.getVideoDetails)
    }
    render() {
        const {videoDetails} = this.state
        return (
            <ReactContext.Consumer>
        {value=>{
          const {isDarkModeOn} = value
          return(
            <HomeContentContainer darkMode={isDarkModeOn}>
                <Banner />
                <Search changeSearchValue={this.changeSearchValue}/>
                <VideoGridContainer >
                {videoDetails.map(eachVideo=>{
                return <VideoDetail key={eachVideo.id} videoDetails={eachVideo}/>
                })}</VideoGridContainer>
            </HomeContentContainer>
          )
        }}
        </ReactContext.Consumer>
        );
    }
}

export default HomeContent;
