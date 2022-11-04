import { Component } from 'react';
import Navbar from '../NavBar/navbar';
import './home.css'
import {Link} from 'react-router-dom'
class Home extends Component {
 
  render() {
  
    return (
     <>
     <Navbar/>
     <div className='home'>
      <div className='home-content'>
      <h1>Find The Job That Fits Your Life</h1>
      <p>Millions of people are searching for jobs, salary information, company reviews. Find the job that fits your abilities and potential.</p>
      <button><Link to={'/jobs'}>Find Jobs</Link></button>
      </div>
     </div>
     </>
    )
  }
}
export default Home;