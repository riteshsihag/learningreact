import { Component } from 'react';
import Cookies from 'js-cookie';
import Navbar from '../Navbar/navbar';
import Sidebar from '../Sidebar/sidebar';
import {IoLogoGameControllerB} from 'react-icons/io'
import { GamingContainer, GamingChild, GamingHeading } from './gamingStyle';
import { HeadingContainer } from '../Trending/trendingStyle';
import GamingVideo from '../GamingVideo/gamingVideo';
class Gaming extends Component {

    state = {
        gamingDetails: [],
    }
    componentDidMount() {
        this.getVideoDetails();
    }
    getVideoDetails = async () => {
        const url = `https://apis.ccbp.in/videos/gaming`
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
                views: eachVideo.view_count,
            }))
            this.setState({ gamingDetails: updatedData })
        }
    }

    render() {
        const { gamingDetails } = this.state
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

export default Gaming;
