import { Component } from 'react';
import {withRouter} from 'react-router-dom'

class Similar extends Component {
 
  render() {
   const {jobs} = this.props
  
    return (
     <>
    {jobs.map((eachJob)=>{
                return <div className='job-container'>
                    <div className='roll-container'>
                <img className='logo' src={eachJob.company_logo_url} />
                <div className='roll-detail'>
                    <h1>{eachJob.title}</h1>
                    <p>{eachJob.rating}</p>
                </div>
                </div>
                <div className='job-type-container'>
                    <div className='type-container'>
                    <p>{eachJob.location}</p>
                    <p>{eachJob.employment_type}</p>
                    </div>
                </div>
                <div className='description-container'>
                   <h2>Description</h2>
                   <p>{eachJob.job_description}</p>
                </div>
            </div>
            })}
     </>
    )
  }
}
export default withRouter(Similar);