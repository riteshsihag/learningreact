import { Component, useEffect } from 'react';
import Search from '../Search/search';
import Filter from '../FilterProducts/filter';
import Package from '../FilterProducts/minPackage';
import Profile from '../Profile/profile';
import './jobRoute.css'
import Navbar from '../NavBar/navbar';
import jobRouteStore from '../../Stores/JobRouteStore/jobRouteStore';
import { observer } from 'mobx-react';
import React from 'react';
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

const JobRoute = observer(()=> {
    const JobRouteValues = jobRouteStore
  useEffect(()=>{
    JobRouteValues.getJobs()
  },[])
    switch (JobRouteValues.apiStatus) {
      case JobRouteValues.apiStatusConstants.success:
        return (
          <>
            <Navbar />
            <div className='main-job-container'>
              <div className='profile-filter-container'>
                <Profile />
                <Filter checkBox ={JobRouteValues.checkBox} typeOfEmployment={typeOfEmployment} />
                <Package minPackage={minPackage} findMinPackageJobs={JobRouteValues.findMinPackageJobs} />
              </div>
              <Search allJobs={JobRouteValues.allJobs} />
            </div>
          </>
        )
      case JobRouteValues.apiStatusConstants.noJobs:
        return (
          <>
          <div className='allFilter-container'>
             <Filter checkBox={JobRouteValues.checkBox} typeOfEmployment={typeOfEmployment} />
            <div className='no-product'> <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png" />
              <h2>No Products Found</h2>
              <p>We could not find any products. Please try other filters</p>
            </div>
          </div>
          </>
        )
      case JobRouteValues.apiStatusConstants.failure:
        return (
          <>
          <div className='allFilter-container'>
             <Filter checkBox={JobRouteValues.checkBox} typeOfEmployment={typeOfEmployment} />
            <div className='no-product'><img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png" />
              <h2>Oops! Something Went Wrong</h2>
              <p>We are having some trouble processing your request. Please try again.</p>
            </div>
          </div>
          </>
        )
      default:
        return null;
        }
    
  }
)

export default JobRoute;
