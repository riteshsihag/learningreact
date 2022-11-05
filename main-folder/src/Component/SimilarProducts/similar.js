import { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { BsFillBagFill } from 'react-icons/bs'
import './similar.css'
class Similar extends Component {

  render() {
    const { jobs } = this.props

    return (
     <>
        <div id='job-container1'>
          <div id='roll-container'>
            <img id='logo1' src={jobs.company_logo_url} />
            <div id='roll-detail'>
              <h2 className='job-title'>{jobs.title}</h2>
              <div id='rating-container'>
                <AiFillStar />
                <p>{jobs.rating}</p>
              </div>
            </div>
          </div>
          <div id='job-type-container'>
            <div id='type-container'>
              <div id='location-container'>
                <GoLocation />
                <p>{jobs.location}</p>
              </div>
              <div id='location-container'>
                <BsFillBagFill />
                <p>{jobs.employment_type}</p>
              </div>
            </div>
          </div>
          <div id='description-container'>
            <div className='visit-link'>
              <h2>Description</h2>
            </div>
            <p>{jobs.job_description}</p>
          </div>
        </div>
        </>
        )
  }
}
        export default withRouter(Similar);