import { Component } from 'react';
import Cookies from 'js-cookie';
import { HeadingContainer, TrendingChild, TrendingContainer, TrendingHeading } from './trendingStyle';
import Navbar from '../Navbar/navbar';
import Sidebar from '../Sidebar/sidebar';
import { ImFire } from 'react-icons/im';
import TrendingVideo from '../TrendingVideo/trendingVideo';
class Trending extends Component {

    state = {
        trendingDetails: [],
    }
    componentDidMount() {
        this.getVideoDetails();
    }
    getVideoDetails = async () => {
        const url = `https://apis.ccbp.in/videos/trending`
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
                publishedAt: eachVideo.published_at
            }))
            this.setState({ trendingDetails: updatedData })
        }
    }

    render() {
        const { trendingDetails } = this.state
        return (
            <>
                <Navbar />
                <div className='home-content'>
                    <Sidebar />
                    <TrendingContainer>
                        <HeadingContainer>
                 <ImFire style={{fontSize:'27px', marginTop: '5px', color:'#ff0000'}}/>
                       <TrendingHeading>Trending</TrendingHeading>
                       </HeadingContainer>
                        <TrendingChild display={'block'}>
                            {trendingDetails.map(eachVideo => {
                                return <TrendingVideo videoDetails={eachVideo} />
                            })}
                        </TrendingChild>
                        </TrendingContainer>

                </div>

            </>
            
        );
    }
}

export default Trending;
