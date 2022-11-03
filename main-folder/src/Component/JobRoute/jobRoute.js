import { Component } from 'react';
import Cookies from 'js-cookie';
import Search from '../Search/search';
import Filter from '../FilterProducts/filter';

const typeOfEmployment = [
  {
    id: '1',
    type: 'Full Time'
  },
  {
    id: '2',
    type: 'Part Time'
  },
  {
    id: '3',
    type: 'Freelance'
  },
  {
    id: '4',
    type: 'Internship'
  },
]

class JobRoute extends Component {
  state = {
    allJobs : [],
    filterJobs: []
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
    checkBox = (id,checked) => {
      const {allJobs } = this.state
      console.log(checked)
      if (checked === true) {
          const updatedJob = allJobs.filter((item) => {
              if (id === item.id) {
                  return item
              }
          })
          this.setState({ filterJobs: updatedJob })
      }
  }
  render() {
    const {allJobs,filterJobs} = this.state
    console.log(filterJobs)
    return (
      <>
      <Filter checkBox={this.checkBox} typeOfEmployment={typeOfEmployment}/>
      <Search allJobs={allJobs}/>
      </>
    );
  }
}

export default JobRoute;
