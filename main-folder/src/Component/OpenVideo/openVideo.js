import { Component } from 'react';
import Cookies from 'js-cookie';
import Navbar from '../Navbar/navbar';
import Sidebar from '../Sidebar/sidebar';
import { GamingContainer, GamingChild } from './openedVideoStyle';
import VideoPlayer from '../VideoPlayer/videoPlayer';
import { withRouter } from 'react-router-dom';
import VideoText from './displayOpenedVideo';
class OpenedVideo extends Component {

    state = {
        openedVideoDetails: [],
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
            this.setState({ openedVideoDetails: updatedData })
        }
    }

    render() {
        const { openedVideoDetails } = this.state
        return (
            <>
                <Navbar />
                <div className='home-content'>
                    <Sidebar />
                    <GamingContainer>
                        <GamingChild>
                                <VideoPlayer videoUrl={openedVideoDetails.videoUrl}/>
                                <VideoText videoDetails={openedVideoDetails}/>
                        </GamingChild>
                        </GamingContainer>

                </div>

            </>
            
        );
    }
}

export default withRouter(OpenedVideo) ;
