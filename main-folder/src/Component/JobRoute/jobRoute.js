import { Component } from 'react';
import Cookies from 'js-cookie';
import Search from '../Search/search';



class JobRoute extends Component {
  state = {
    allJobs : []
  }
  componentDidMount(){
    this.getJobs()
  }
    getJobs= async ()=>{
        const url = "https://apis.ccbp.in/jobs"
    const jwtToken = Cookies.get('jwt_token')
        const options={
            method: 'GET',
            headers :  {Authorization: `Bearer ${jwtToken}`,}
        }
        const response = await fetch(url,options)
        const data = await response.json()
        if(response.ok===true){
            const updatedData = data.jobs.map((job)=>({
              logoUrl : job.company_logo_url,
              employmentType : job.employment_type,
              id : job.id,
              description : job.job_description,
              location : job.location,
              package : job.package_per_annum,
              rating : job.rating,
              title : job.title
            }))
            this.setState({allJobs: updatedData})
        }
    }
  render() {
    const {allJobs} = this.state
    return (
      <>
      <Search allJobs={allJobs}/>
      </>
    );
  }
}

export default JobRoute;
