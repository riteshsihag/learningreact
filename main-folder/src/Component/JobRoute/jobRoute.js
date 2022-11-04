import { Component } from 'react';
import Cookies from 'js-cookie';
import Search from '../Search/search';
import Filter from '../FilterProducts/filter';
import Package from '../FilterProducts/minPackage';
import Profile from '../Profile/profile';
import './jobRoute.css'
import Navbar from '../NavBar/navbar';

const typeOfEmployment = [
  {
    id: 'FULLTIME',
    type: 'Full Time'

  },
  {
    id: 'PARTTIME',
    type: 'Part Time'
  },
  {
    id: 'FREELANCE',
    type: 'Freelance'
  },
  {
    id: 'INTERNSHIP',
    type: 'Internship'
  },
]
const minPackage = [
  {
    id: '1000000',
    type: '10 LPA and above'

  },
  {
    id: '2000000',
    type: '20 LPA and above'
  },
  {
    id: '3000000',
    type: '30 LPA and above'
  },
  {
    id: '4000000',
    type: '40 LPA and above'
  },
]

class JobRoute extends Component {
  state = {
    allJobs: [],
    employmentType: [],
    minPackage: ''
  }


  componentDidMount() {
    this.getJobs()
  }
  getJobs = async () => {
    const { employmentType, minPackage } = this.state
    const url = `https://apis.ccbp.in/jobs?employment_type=${employmentType}&minimum_package=${minPackage}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: { Authorization: `Bearer ${jwtToken}`, }
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = data.jobs.map((job) => ({
        logoUrl: job.company_logo_url,
        employmentType: job.employment_type,
        id: job.id,
        description: job.job_description,
        location: job.location,
        package: job.package_per_annum,
        rating: job.rating,
        title: job.title
      }))
      this.setState({ allJobs: updatedData })
    }
  }
  checkBox = (type, checked) => {
    const { employmentType } = this.state
    if (checked === true) {
      this.setState(prevState => ({employmentType: [...prevState.employmentType, type.toUpperCase()]} ),this.getJobs)
    }
    else {
      const updatedData = employmentType.filter(item => {
        if (type !== item) {
          return item
        }
      })
      this.setState({ employmentType: updatedData }, this.getJobs)
    }
  }
  findMinPackageJobs = (salary,checked) =>{
    if (checked === true) {
      this.setState({minPackage: salary} ,this.getJobs)
    }
    }
  
  render() {
    const { allJobs } = this.state

    return (
      <>
      <Navbar/>
      <div className='main-job-container'>
      <div className='profile-filter-container'>
      <Profile/>
        <Filter checkBox={this.checkBox} typeOfEmployment={typeOfEmployment} />
        <Package minPackage={minPackage} findMinPackageJobs={this.findMinPackageJobs}/>
      </div>
        <Search allJobs={allJobs} />
        </div>
      </>
    );
  }
}

export default JobRoute;
