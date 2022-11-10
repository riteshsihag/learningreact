import { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactContext from '../../Context/reactContext';
import TrendingVideo from '../TrendingVideo/trendingVideo';
import { HeadingContainer, TrendingChild, TrendingContainer, TrendingHeading } from '../Trending/trendingStyle';
import Navbar from '../Navbar/navbar';
import Sidebar from '../Sidebar/sidebar';
import { ImFire } from 'react-icons/im';

class SavedVideo extends Component {

    render() {

        return (
            <ReactContext.Consumer>
                {value => {
                    const { savedVideos } = value
                    console.log(savedVideos)
                    return (
                        <>
                            <Navbar />
                            <div className='home-content'>
                                <Sidebar />
                                <TrendingContainer>
                                    <HeadingContainer>
                                        <ImFire style={{ fontSize: '27px', marginTop: '5px', color: '#ff0000' }} />
                                        <TrendingHeading>Saved Videos</TrendingHeading>
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
    }
}

export default SavedVideo;
