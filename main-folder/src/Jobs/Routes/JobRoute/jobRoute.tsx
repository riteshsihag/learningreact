import { useEffect } from 'react';
import './jobRoute.css'
import jobRouteStore from '../../Stores/JobRouteStore/jobRouteStore';
import { observer } from 'mobx-react';
import Navbar from '../../../Common/Components/NavBar/navbar';
import Profile from '../../../UserProfile/Components/Profile/profile';
import LanguageDropdown from '../../../Common/Components/LanguageChanger/languageDropdown';
import Filter from '../../Components/FilterbyEmploymentType/filter';
import MinPackage from '../../Components/FilterbySalary/minPackage';
import Search from '../../Components/SearchJobs/search';



const JobRoute = observer(() => {
  const JobRouteValues = jobRouteStore
  useEffect(() => {
    JobRouteValues.getJobs()
  }, [JobRouteValues])
  switch (JobRouteValues.apiStatus) {
    case JobRouteValues.apiStatusConstants.success:
      return (
        <>
          <Navbar />
          <div className='main-job-container'>
            <div className='profile-filter-container'>
              <Profile />
              <Filter checkBox={JobRouteValues.checkBox} />
              <MinPackage findMinPackageJobs={JobRouteValues.findMinPackageJobs} />
            </div>
            <Search allJobs={JobRouteValues.allJobs} />
            <LanguageDropdown />
          </div>
        </>
      )
    case JobRouteValues.apiStatusConstants.noJobs:
      return (
        <>
          <Navbar />
          <div className='main-job-container'>
            <div className='profile-filter-container'>
              <Profile />
            <Filter checkBox={JobRouteValues.checkBox} />
              <MinPackage findMinPackageJobs={JobRouteValues.findMinPackageJobs} />
            </div>
            <div className='allFilter-container'>
            <Search allJobs={JobRouteValues.allJobs} />
            <div className='no-product'> <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png" alt=''/>
              <h2>No Jobs Found</h2>
              <p>We could not find any Jobs. Please try other filters</p>
            </div>
          </div>
            <LanguageDropdown />
          </div>
         
        </>
      )
    case JobRouteValues.apiStatusConstants.failure:
      return (
        <>
          <div className='allFilter-container'>
            <Filter checkBox={JobRouteValues.checkBox} />
            <div className='no-product'><img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png" alt=''/>
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
