import { Component } from 'react';
import Cookies from 'js-cookie';
import { HeadingContainer, TrendingChild, TrendingContainer, TrendingHeading } from './trendingStyle';
import Navbar from '../Navbar/navbar';
import Sidebar from '../Sidebar/sidebar';
import { ImFire } from 'react-icons/im';
import TrendingVideo from '../TrendingVideo/trendingVideo';
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
class Trending extends Component {

    state = {
        trendingDetails: [],
        apiStatus: apiStatusConstant.loading
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
            this.setState({ trendingDetails: updatedData, apiStatus: apiStatusConstant.success })
        }
        else {
            this.setState({ apiStatus: apiStatusConstant.failed })

        }
    }

    render() {
        const { trendingDetails, apiStatus } = this.state
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
                                        <TrendingContainer darkMode={isDarkModeOn}>
                                            <HeadingContainer darkMode={isDarkModeOn}>
                                                <ImFire style={{ fontSize: '27px', marginTop: '5px', color: '#ff0000' }} />
                                                <TrendingHeading darkMode={isDarkModeOn}>Trending</TrendingHeading>
                                            </HeadingContainer>
                                            <TrendingChild display={'block'}>
                                                {trendingDetails.map(eachVideo => {
                                                    return <TrendingVideo videoDetails={eachVideo} />
                                                })}
                                            </TrendingChild>
                                        </TrendingContainer>

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
                                        <TrendingContainer darkMode={isDarkModeOn}>
                                            <LoaderContainer>
                                                <Loader />
                                            </LoaderContainer>
                                        </TrendingContainer>

                                    </div>

                                </>
                            )
                        }}
                    </ReactContext.Consumer>
                )
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

export default Trending;
