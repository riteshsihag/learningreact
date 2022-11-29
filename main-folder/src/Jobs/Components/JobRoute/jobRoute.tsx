import { Component, useEffect } from 'react';
import Search from '../SearchJobs/search';
import Filter from '../FilterbyEmploymentType/filter';
import Package from '../FilterbySalary/minPackage';
import Profile from '../Profile/profile';
import './jobRoute.css'
import Navbar from '../NavBar/navbar';
import jobRouteStore from '../../Stores/JobRouteStore/jobRouteStore';
import { observer } from 'mobx-react';
import React from 'react';
import LanguageDropdown from '../LanguageChanger/languageDropdown';
import { useTranslation } from 'react-i18next';



const JobRoute = observer(()=> {
    const JobRouteValues = jobRouteStore
    const {t} = useTranslation()
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
                <Filter checkBox ={JobRouteValues.checkBox}/>
                <Package findMinPackageJobs={JobRouteValues.findMinPackageJobs} />
              </div>
              <Search allJobs={JobRouteValues.allJobs} />
              <LanguageDropdown/>
            </div>
          </>
        )
      case JobRouteValues.apiStatusConstants.noJobs:
        return (
          <>
          <div className='allFilter-container'>
             <Filter checkBox={JobRouteValues.checkBox} />
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
             <Filter checkBox={JobRouteValues.checkBox} />
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
