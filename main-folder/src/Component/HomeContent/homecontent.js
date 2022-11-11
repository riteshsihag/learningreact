import { Component } from 'react';
import Banner from '../Banner/banner';
import VideoDetail from '../VideoContainer/videoComponent';
import { HomeContentContainer, NoResultContainer, NoResultHeading, NoResultImg, NoResultPara, RetryButton, VideoGridContainer } from './homecontentStyle';
import Cookies from 'js-cookie';
import Search from '../Search/search';
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
class HomeContent extends Component {

    state = {
        videoDetails: [],
        searchValue: '',
        apiStatus: apiStatusConstant.loading
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
            this.setState({videoDetails: updatedData, apiStatus:apiStatusConstant.success})
            if(updatedData.length===0){
                this.setState({apiStatus: apiStatusConstant.noResult})
            }
        }
        else{
            this.setState({apiStatus: apiStatusConstant.failed})
        }
        
    }
    removeSearchResults=()=>{
        this.setState({searchValue:''},this.getVideoDetails)

    }
    changeSearchValue=(value)=>{
        this.setState({searchValue: value}, this.getVideoDetails)
    }
    render() {
        const {videoDetails,apiStatus} = this.state
        switch(apiStatus){
            case apiStatusConstant.success:
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
            case apiStatusConstant.noResult:
                return(
                    <ReactContext.Consumer>
                    {value=>{
                      const {isDarkModeOn} = value
                      return(
                    <HomeContentContainer darkMode={isDarkModeOn}>
                        <Banner />
                        <Search changeSearchValue={this.changeSearchValue}/>
                    <NoResultContainer>
                        <NoResultImg src='https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png'/>
                        <NoResultHeading darkMode={isDarkModeOn}>No Search results found</NoResultHeading>
                        <NoResultPara darkMode={isDarkModeOn}>Try different keywords or clear search filter</NoResultPara>
                        <RetryButton onClick={this.removeSearchResults}>Retry</RetryButton>
                    </NoResultContainer>
                    </HomeContentContainer>
                      )
                    }}
                    </ReactContext.Consumer>

                )
            case apiStatusConstant.loading:
                return(
                    <ReactContext.Consumer>
                    {value=>{
                      const {isDarkModeOn} = value
                      return(
                    <HomeContentContainer darkMode={isDarkModeOn}>
                        <Banner />
                        <Search changeSearchValue={this.changeSearchValue}/>
                        <LoaderContainer>
                        <Loader/>
                        </LoaderContainer>
                    </HomeContentContainer>
                      )
                    }}
                    </ReactContext.Consumer>
                )
                case apiStatusConstant.failed:
                    return(
                        <ReactContext.Consumer>
                    {value=>{
                      const {isDarkModeOn} = value
                      return(
                        <>
                         <HomeContentContainer darkMode={isDarkModeOn}>
                        <Banner />
                        <Search changeSearchValue={this.changeSearchValue}/>
                    <NoResultContainer>
                        <Failed/>
                    </NoResultContainer>
                    </HomeContentContainer>
    
                    </>
                      )
                    }}
                    </ReactContext.Consumer>
                    )
        }
        
    }
}

export default HomeContent;
