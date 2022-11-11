import ReactContext from "../../Context/reactContext";
import Banner from "../Banner/banner";
import { HomeContentContainer, NoResultContainer, NoResultHeading, NoResultImg, NoResultPara, RetryButton } from "../HomeContent/homecontentStyle";
import Search from "../Search/search";
import { Component } from "react";
import Navbar from "../Navbar/navbar";
import Sidebar from "../Sidebar/sidebar";

class Failed extends Component {



    render() {
        return (
            <ReactContext.Consumer>
                {value => {
                    const { isDarkModeOn } = value
                    return (
                       
                        <HomeContentContainer darkMode={isDarkModeOn}>
                            <NoResultContainer>
                                {isDarkModeOn ?
                                    <NoResultImg src='https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png' />

                                    :
                                    <NoResultImg src='https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png' />

                                }
                                <NoResultHeading darkMode={isDarkModeOn}>No Search results found</NoResultHeading>
                                <NoResultPara darkMode={isDarkModeOn}>Try different keywords or clear search filter</NoResultPara>
                                <RetryButton onClick={this.removeSearchResults}>Retry</RetryButton>
                            </NoResultContainer>
                        </HomeContentContainer>
                        
                    )
                }}
            </ReactContext.Consumer>
        )
    }
}
export default Failed;
