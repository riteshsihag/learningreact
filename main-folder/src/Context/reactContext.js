import React from 'react'

const ReactContext = React.createContext({
  savedVideos: [],
  likedVideos: [],
  dislikedVideos: [],
  isDarkModeOn: false,
  changeSavedVideos: () => {},
  removeSavedVideo: ()=>{},
  onLikeVideo:()=>{},
  removeLikedVideo:()=>{},
  removeDisLikedVideo:()=>{},
  onDislikeVideo: ()=>{},
  toggleDarkMode: ()=>{}
})

export default ReactContext