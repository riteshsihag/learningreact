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
    isVideoSaved: false
  }
  changeSavedVideos=(value)=>{
    this.setState(prevState=>({savedVideos: [...prevState.savedVideos, value], isVideoSaved:true}))

  }
  removeSavedVideo=(value)=>{
    const {savedVideos} = this.state
   const removeVideo =  savedVideos.map(eachVideo=>{
      if(eachVideo.id!==value.id){
        return eachVideo
      }
    })
    this.setState()
  }
  render() {
    const {savedVideos, isVideoSaved} = this.state
    return (
      <BrowserRouter>
      <Switch>
     <ReactContext.Provider value={{savedVideos: savedVideos, changeSavedVideos: this.changeSavedVideos, isVideoSaved: isVideoSaved, removeSavedVideo: this.removeSavedVideo}}>
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
