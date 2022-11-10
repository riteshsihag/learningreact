import React from 'react'

const ReactContext = React.createContext({
  savedVideos: [],
  changeSavedVideos: () => {},
  removeSavedVideo: ()=>{}
})

export default ReactContext