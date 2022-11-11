import { Component } from 'react';
import Cookies from 'js-cookie';
import Navbar from '../Navbar/navbar';
import Sidebar from '../Sidebar/sidebar';
import { IoLogoGameControllerB } from 'react-icons/io'
import { GamingContainer, GamingChild, GamingHeading } from './gamingStyle';
import { HeadingContainer } from '../Trending/trendingStyle';
import GamingVideo from '../GamingVideo/gamingVideo';
import ReactContext from '../../Context/reactContext';
import Loader from '../Loader/loader';
import { LoaderContainer } from '../OpenVideo/openedVideoStyle';
import Failed from '../FailedStatus/failed';
const apiStatusConstant = {
    success: 'Success',
    failed: 'Failed',
    loading: 'loading',
    noResult: 'noResult'
}
class Gaming extends Component {

    state = {
        gamingDetails: [],
        apiStatus: apiStatusConstant.loading
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
            this.setState({ gamingDetails: updatedData, apiStatus: apiStatusConstant.success })
        }
        else {
            this.setState({ apiStatus: apiStatusConstant.failed })
        }
    }

    render() {
        const { gamingDetails, apiStatus } = this.state
        switch (apiStatus) {
            case apiStatusConstant.success:
                return (
                    <ReactContext.Consumer>
                        {value => {
                            const { isDarkModeOn } = value
                            return (
                                <>
                                    <Navbar />
                                    <div className='home-content'>
                                        <Sidebar />
                                        <GamingContainer darkMode={isDarkModeOn}>
                                            <HeadingContainer darkMode={isDarkModeOn}>
                                                <IoLogoGameControllerB style={{ fontSize: '27px', marginTop: '5px', color: '#ff0000' }} />
                                                <GamingHeading darkMode={isDarkModeOn}>Gaming</GamingHeading>
                                            </HeadingContainer>
                                            <GamingChild display={'block'}>
                                                {gamingDetails.map(eachVideo => {
                                                    return <GamingVideo videoDetails={eachVideo} />
                                                })}
                                            </GamingChild>
                                        </GamingContainer>

                                    </div>

                                </>
                            )
                        }}
                    </ReactContext.Consumer>
                );
            case apiStatusConstant.loading:
                return (
                    <ReactContext.Consumer>
                        {value => {
                            const { isDarkModeOn } = value
                            return (
                                <>
                                    <Navbar />
                                    <div className='home-content'>
                                        <Sidebar />
                                        <GamingContainer darkMode={isDarkModeOn}>
                                        <LoaderContainer>
                                                <Loader />
                                            </LoaderContainer>
                                        </GamingContainer>

                                    </div>

                                </>
                            )
                        }}
                    </ReactContext.Consumer>
                );
                case apiStatusConstant.failed:
                    return(
                       
                        <>
                        <Navbar />
                        <div className='home-content'>
                            <Sidebar />
                            
                            <Failed/>
    
    
    
                        </div>
    
                    </>
                     
                    )
        }
    }
}
export default Gaming;
