import { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../NavBar/navbar';
import './home.css'
class Home extends Component {
 
  render() {
  
    return (
     <>
     <Navbar/>
     <div className='home'>
      <div className='home-content'>
      <h1>Clothes That Get YOU Noticed</h1>
      <p>Fashion is part of the daily air and it does not quite help that it changes all the time. Clothes have always been a marker of the era and we are in a revolution. Your fashion makes you been seen and heard that way you are. So, celebrate the seasons new and exciting fashion in your own way.</p>
      <button><Link to='/products'>Shop Now</Link></button>
      </div>
      <div className='home-banner'>
       <img src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png'/>
      </div>
     </div>
     </>
    )
  }
}
export default Home;