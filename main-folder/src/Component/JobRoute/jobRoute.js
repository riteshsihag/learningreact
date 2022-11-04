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
const apiStatusConstants = {
  initial: 'INITIAL',
  noJobs: 'NOJOBS',
  failure: 'FAILURE',
  success: 'SUCCESS'
}
class JobRoute extends Component {
  state = {
    allJobs: [],
    employmentType: [],
    minPackage: '',
    apiStatus: apiStatusConstants.initial,
    searchValue: ''
  }


  componentDidMount() {
    this.getJobs()
  }
  getJobs = async () => {
    const { employmentType, minPackage, searchValue } = this.state
    const url = `https://apis.ccbp.in/jobs?employment_type=${employmentType}&minimum_package=${minPackage}&search=${searchValue}`
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
      if (updatedData.length === 0) {
        this.setState({ apiStatus: apiStatusConstants.noJobs })
      }
      this.setState({ allJobs: updatedData , apiStatus:apiStatusConstants.success})
    }
    else {
      this.setState({ apiStatus: apiStatusConstants.failure})
    }
  }
  checkBox = (type, checked) => {
    const { employmentType } = this.state
    if (checked === true) {
      this.setState(prevState => ({ employmentType: [...prevState.employmentType, type.toUpperCase()] }), this.getJobs)
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
  findMinPackageJobs = (salary, checked) => {
    if (checked === true) {
      this.setState({ minPackage: salary }, this.getJobs)
    }
  }
  changeSearchValue=(value)=>{
    this.setState({searchValue: value})
  }

  render() {
    const { allJobs, apiStatus } = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return (
          <>
            <Navbar />
            <div className='main-job-container'>
              <div className='profile-filter-container'>
                <Profile />
                <Filter checkBox={this.checkBox} typeOfEmployment={typeOfEmployment} />
                <Package minPackage={minPackage} findMinPackageJobs={this.findMinPackageJobs} />
              </div>
              <Search changeSearchValue={this.changeSearchValue} allJobs={allJobs} />
            </div>
          </>
        )
      case apiStatusConstants.noJobs:
        return (
          <div className='allFilter-container'>
            <Filter checkBox={this.checkBox} typeOfEmployment={typeOfEmployment} />
            <div className='no-product'> <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png" />
              <h2>No Products Found</h2>
              <p>We could not find any products. Please try other filters</p>
            </div>
          </div>
        )
      case apiStatusConstants.failure:
        return (
          <div className='allFilter-container'>
            <Filter checkBox={this.checkBox} typeOfEmployment={typeOfEmployment} />
            <div className='no-product'><img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png" />
              <h2>Oops! Something Went Wrong</h2>
              <p>We are having some trouble processing your request. Please try again.</p>
            </div>
          </div>
        )

    }
  }
}

export default JobRoute;
