import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem/movie'


const Slick = props => {
  const {moviesList} = props

  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <div className='slider-container'>
    <Slider {...settings}>
      {moviesList.map(eachMovie => (
        <MovieItem key={eachMovie.id} movieDetails={eachMovie} />
      ))}
    </Slider>
    </div>
  )
}

export default Slick