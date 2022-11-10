import { Component } from 'react';
import Cookies from 'js-cookie';
import Navbar from '../Navbar/navbar';
import Sidebar from '../Sidebar/sidebar';
import {IoLogoGameControllerB} from 'react-icons/io'
import { GamingContainer, GamingChild, GamingHeading } from './gamingStyle';
import { HeadingContainer } from '../Trending/trendingStyle';
import GamingVideo from '../GamingVideo/gamingVideo';
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
            const updatedData = data.videos.map(eachVideo => ({
                id: eachVideo.id,
                title: eachVideo.title,
                thumbnailUrl: eachVideo.thumbnail_url,
                channelName: eachVideo.channel.name,
                profileUrl: eachVideo.channel.profile_image_url,
                views: eachVideo.view_count,
                publishedAt: eachVideo.published_at,
                videoUrl: eachVideo.video_url,
                subscriber: eachVideo.channel.subscriber_count,
                description: eachVideo.description
            }))
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
                        <HeadingContainer>
                 <IoLogoGameControllerB style={{fontSize:'27px', marginTop: '5px', color:'#ff0000'}}/>
                       <GamingHeading>Gaming</GamingHeading>
                       </HeadingContainer>
                        <GamingChild display={'block'}>
                            {gamingDetails.map(eachVideo => {
                                return <GamingVideo videoDetails={eachVideo}/>
                            })}
                        </GamingChild>
                        </GamingContainer>

                </div>

            </>
            
        );
    }
}

export default OpenedVideo;
