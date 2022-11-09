import { Component } from 'react';
import Banner from '../Banner/banner';
import HomeContent from '../HomeContent/homecontent';
import Navbar from '../Navbar/navbar';
import Sidebar from '../Sidebar/sidebar';
import './home.css'
class Home extends Component {
  
  render() {
    
    return (
      <>
      <Navbar/>
      <div className='home-content'>
      <Sidebar/>
      <HomeContent/>
      </div>
      
      </>
    );
  }
}

export default Home;
