import ReactPlayer from 'react-player'
import './videoplayer.css'

const VideoPlayer = (props) => (
  <div className="video-container">
    <div className="responsive-container">
      <ReactPlayer className={'video'} width={'100%'}  url={props.videoUrl} />
    </div>
  </div>
)

export default VideoPlayer