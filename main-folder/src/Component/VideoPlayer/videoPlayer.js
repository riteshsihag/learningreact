import ReactPlayer from 'react-player'


const VideoPlayer = (props) => (
  <div className="video-container">
    <div className="responsive-container">
      <ReactPlayer width={'100%'} height={'600px'} url={props.videoUrl} />
    </div>
  </div>
)

export default VideoPlayer