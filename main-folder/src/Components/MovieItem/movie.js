import Popup from 'reactjs-popup'

import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'


const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <div className="movie-container">
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} alt="thumbnail" />
        }
        className="popup"
      >
        {close => (
          <div className='close-container'>
            <button
              type="button"
              className="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size={20} color="#231f20" />
            </button>
            <div>
              <ReactPlayer className="player" url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem