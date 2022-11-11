import { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactContext from '../../Context/reactContext';
import TrendingVideo from '../TrendingVideo/trendingVideo';
import { HeadingContainer, TrendingChild, TrendingContainer, TrendingHeading } from '../Trending/trendingStyle';
import Navbar from '../Navbar/navbar';
import Sidebar from '../Sidebar/sidebar';
import { ImFire } from 'react-icons/im';
import { NoResultContainer, NoResultHeading, NoResultImg, NoResultPara} from '../HomeContent/homecontentStyle';

const apiStatusConstant = {
    success: 'Success',
    failed: 'Failed',
    loading: 'loading',
    noResult: 'noResult'
}

class SavedVideo extends Component {
    state = {
        apiStatus: apiStatusConstant.success
    }
    componentDidMount() {
        let myContext = this.context
        let savedVideos = myContext.savedVideos
        if (savedVideos.length === 0) {
            this.setState({ apiStatus: apiStatusConstant.noResult })
        }
    }
    render() {
        const { apiStatus } = this.state
        switch (apiStatus) {
            case apiStatusConstant.success:
                return (
                    <ReactContext.Consumer>
                        {value => {
                            const { savedVideos, isDarkModeOn } = value

                            return (

                                <>
                                    <Navbar />
                                    <div className='home-content'>
                                        <Sidebar />
                                        <TrendingContainer darkMode={isDarkModeOn}>
                                            <HeadingContainer darkMode={isDarkModeOn}>
                                                <ImFire style={{ fontSize: '27px', marginTop: '5px', color: '#ff0000' }} />
                                                <TrendingHeading darkMode={isDarkModeOn}>Saved Videos</TrendingHeading>
                                            </HeadingContainer>
                                            <TrendingChild display={'block'}>
                                                {savedVideos.map(eachVideo => {
                                                    return (
                                                        <Link to={`/video/${eachVideo.id}`}>
                                                            <TrendingVideo videoDetails={eachVideo} />
                                                        </Link>
                                                    )
                                                })}
                                            </TrendingChild>
                                        </TrendingContainer>

                                    </div>
                                </>


                            )
                        }}
                    </ReactContext.Consumer>
                );
            case apiStatusConstant.noResult:
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
                                            <NoResultContainer>
                                                <NoResultImg src='https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png' />
                                                <NoResultHeading darkMode={isDarkModeOn}>No Saved Videos Found</NoResultHeading>
                                                <NoResultPara darkMode={isDarkModeOn}>You can Save your video while watching them</NoResultPara>
                                            </NoResultContainer>
                                        </TrendingContainer>

                                    </div>
                                </>
                            )
                        }}
                    </ReactContext.Consumer>
                )
        }

    }
}
SavedVideo.contextType = ReactContext

export default SavedVideo;
