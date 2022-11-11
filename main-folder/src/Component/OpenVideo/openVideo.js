import { Component } from 'react';
import Cookies from 'js-cookie';
import Navbar from '../Navbar/navbar';
import Sidebar from '../Sidebar/sidebar';
import { GamingContainer, GamingChild, LoaderContainer } from './openedVideoStyle';
import VideoPlayer from '../VideoPlayer/videoPlayer';
import { withRouter } from 'react-router-dom';
import VideoText from './displayOpenedVideo';
import {ThreeDots} from 'react-loader-spinner';
import ReactContext from '../../Context/reactContext';
import Loader from '../Loader/loader';

const apiStatusConstant = {
    success: 'Success',
    failed: 'Failed',
    loading: 'loading'
}
class OpenedVideo extends Component {

    state = {
        openedVideoDetails: [],
        apiStatus: apiStatusConstant.loading
    }
    componentDidMount() {
        this.getVideoDetails();
    }
    getVideoDetails = async () => {
        const { match } = this.props
        const { params } = match
        const { id } = params
        const url = `https://apis.ccbp.in/videos/${id}`
        const jwtToken = Cookies.get('jwt_token')
        const options = {
            method: 'GET',
            headers: { Authorization: `Bearer ${jwtToken}` }
        }
        const response = await fetch(url, options)
        const data = await response.json()
        if (response.ok === true) {
            const updatedData = {
                id: data.video_details.id,
                title: data.video_details.title,
                thumbnailUrl: data.video_details.thumbnail_url,
                channelName: data.video_details.channel.name,
                profileUrl: data.video_details.channel.profile_image_url,
                views: data.video_details.view_count,
                publishedAt: data.video_details.published_at,
                videoUrl: data.video_details.video_url,
                subscriber: data.video_details.channel.subscriber_count,
                description: data.video_details.description
            }
            this.setState({ openedVideoDetails: updatedData, apiStatus: apiStatusConstant.success })
        }
        else {
            this.setState({ apiStatus: apiStatusConstant.failed })
        }

    }

    render() {
        const { openedVideoDetails, apiStatus } = this.state
        switch (apiStatus) {
            case apiStatusConstant.success:
                return (
                    <ReactContext.Consumer>
                    {value=>{
                      const {isDarkModeOn} = value
                      return(
                    <>
                        <Navbar />
                        <div className='home-content'>
                            <Sidebar />
                            <GamingContainer darkMode={isDarkModeOn}>
                                <GamingChild darkMode={isDarkModeOn}>
                                    <VideoPlayer videoUrl={openedVideoDetails.videoUrl} />
                                    <VideoText videoDetails={openedVideoDetails} />
                                </GamingChild>
                            </GamingContainer>

                        </div>

                    </>
                      )
                    }}
                 </ReactContext.Consumer>
                );
            case apiStatusConstant.failed:  
              return <>Failed</> 
            case apiStatusConstant.loading:
                return (
                    <ReactContext.Consumer>
                    {value=>{
                      const {isDarkModeOn} = value
                      return(
                    <>
                    <Navbar />
                    <div className='home-content'>
                        <Sidebar />
                        <GamingContainer darkMode={isDarkModeOn}>
                        <LoaderContainer>
                            <GamingChild darkMode={isDarkModeOn}>
                            <Loader/>
                            </GamingChild>
                        </LoaderContainer>

                        </GamingContainer>
                    </div>
</>
                )
            }}
         </ReactContext.Consumer>
                   
                )   
        }

    }
}

export default withRouter(OpenedVideo);
