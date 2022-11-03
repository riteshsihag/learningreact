import { Component } from 'react';
import Slick from '../Slick/slick';

class PrimeVideo extends Component {

    render() {
        const {movieList} = this.props
        const actionMoviesList = movieList.filter(
            eachMovie => eachMovie.categoryId === 'ACTION',
          )
        
          const comedyMoviesList = movieList.filter(
            eachMovie => eachMovie.categoryId === 'COMEDY',
          )
        return (
            <div className='prime-container'>
               <img className='prime-img' src='https://assets.ccbp.in/frontend/react-js/prime-video-img.png'/>
               <h1>Action Movies</h1>
               <Slick moviesList={actionMoviesList}/>
               <h1>Comedy Movies</h1>
               <Slick moviesList={comedyMoviesList}/>
            </div>
        );
    }
}

export default PrimeVideo;
