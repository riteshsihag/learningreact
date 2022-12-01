import './App.css';
import { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Login from './Component/LoginPage/login';
import ProtectedRoute from './Component/ProtectedRoute/protectedRoute';
import Home from './Component/HomePage/home';
import Trending from './Component/Trending/trending';
import Gaming from './Component/Gaming/gaming';
import OpenedVideo from './Component/OpenVideo/openVideo';
import ReactContext from './Context/reactContext';
import SavedVideo from './Component/SavedVideos/savedVideo';
class App extends Component {
  state={
    savedVideos: [],
    likedVideos: [],
    dislikedVideo: [],
    isDarkModeOn: false
  }
  onLikeVideo=(value)=>{
    this.setState(prevState=>({likedVideos: [...prevState.likedVideos, value]}))
    this.removeDisLikedVideo(value)
  }
  removeLikedVideo=(value)=>{
    const {likedVideos} = this.state
   if(likedVideos.find(eachVideo=>eachVideo.id===value.id)){
    this.setState(prevState=>({likedVideos: prevState.likedVideos.filter(eachVideo=>eachVideo.id!==value.id)}))
  }
  }
  onDislikeVideo=(value)=>{
    this.setState(prevState=>({dislikedVideo: [...prevState.dislikedVideo, value]}))
    this.removeLikedVideo(value)
  }
  removeDisLikedVideo=(value)=>{
    const {dislikedVideo} = this.state
   if(dislikedVideo.find(eachVideo=>eachVideo.id===value.id)){
    this.setState(prevState=>({dislikedVideo: prevState.dislikedVideo.filter(eachVideo=>eachVideo.id!==value.id)}))
  }
  }
  changeSavedVideos=(value)=>{
    this.setState(prevState=>({savedVideos: [...prevState.savedVideos, value]}))
   }
  removeSavedVideo=(value)=>{
    const {savedVideos} = this.state
   if(savedVideos.find(eachVideo=>eachVideo.id===value.id)){
    this.setState(prevState=>({savedVideos: prevState.savedVideos.filter(eachVideo=>eachVideo.id!==value.id)}))
  }}
  toggleDarkMode=(value)=>{
    this.setState({isDarkModeOn: value})
  }
  render() {
    const {savedVideos, likedVideos,dislikedVideo, isDarkModeOn} = this.state
    return (
      <BrowserRouter>
      <Switch>
     <ReactContext.Provider value={{toggleDarkMode:this.toggleDarkMode,isDarkModeOn:isDarkModeOn, removeDisLikedVideo:this.removeDisLikedVideo, removeLikedVideo:this.removeLikedVideo, savedVideos: savedVideos, changeSavedVideos: this.changeSavedVideos,  removeSavedVideo: this.removeSavedVideo, onLikeVideo: this.onLikeVideo, likedVideos:likedVideos, dislikedVideos: dislikedVideo, onDislikeVideo: this.onDislikeVideo}}>
      <Route exact path="/login" component={Login}/>
      <ProtectedRoute exact path='/' component={Home}/>
      <ProtectedRoute exact path='/trending' component={Trending}/>
      <ProtectedRoute exact path='/gaming' component={Gaming}/>
      <ProtectedRoute exact path='/saved-videos' component={SavedVideo}/>
      <ProtectedRoute exact path='/video/:id' component={OpenedVideo}/>
      </ReactContext.Provider>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
