import Cookies from 'js-cookie';
import { Component } from 'react';
import Navbar from '../NavBar/navbar';
import { ThreeDots } from 'react-loader-spinner';
import ShowJobDetails from './showDetails';
import Similar from '../SimilarProducts/similar';

const apiStatusConstants = {
    initial: 'INITIAL',
    failure: 'FAILURE',
    success: 'SUCCESS',
    inProgress: 'INPROGRESS'
  }
  

class Details extends Component {
 state = {
    allDetails : [],
    skills: [],
    isLoading : false,
    apiStatus : apiStatusConstants.initial
 }

 componentDidMount(){
   this.getJobs()
 }
 getJobs= async()=>{
  this.setState({apiStatus: apiStatusConstants.inProgress})
  const { match } = this.props
  const { params } = match
  const { id } = params
    const url = `https://apis.ccbp.in/jobs/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
        method: 'GET',
        headers :  {Authorization: `Bearer ${jwtToken}`,}
    }
    const response = await fetch(url,options)
    if(response.ok === true){
        const data = await response.json()
    
        const updatedData = {
            title: data.job_details.title,
            id: data.job_details.id,
            logoUrl: data.job_details.company_logo_url,
            websiteUrl: data.job_details.company_website_url,
            employmentType: data.job_details.employment_type,
            description: data.job_details.job_description,
            skills: data.job_details.skills,
            life: data.job_details.life_at_company,
            salary: data.job_details.package_per_annum,
            rating: data.job_details.rating,
            similarJobs: data.similar_jobs,
            location: data.job_details.location
        }
        const updatedSkills = updatedData.skills.map(skill=>({
            imageUrl : skill.image_url,
            name : skill.name
        }))  
        
        this.setState({allDetails: updatedData, apiStatus: apiStatusConstants.success, skills: updatedSkills})
    } 
    else{
        this.setState({apiStatus:apiStatusConstants.failure})
    } 
 }
 renderSimilarProducts=()=>{
    const {allDetails} = this.state
    return allDetails.similarJobs.map((item)=>{
        return (<Similar key={item.id} jobs={item}/>)
        })
 }
 renderAllDetails=()=>{
    const {allDetails,skills} = this.state
    return(
        <>
        <Navbar/>
        <ShowJobDetails skills={skills} allDetails={allDetails}/>
        <div>
        <h1 id='similar-heading'>Similar Jobs</h1>

        <div className='similar-container'>
        {this.renderSimilarProducts()}

        </div>
        </div>

        </>
    )
 }
  render() {
   const {apiStatus} = this.state
   switch(apiStatus){
    case apiStatusConstants.success:
       return (this.renderAllDetails())

    case apiStatusConstants.failure:
        return <div>
            <h1>Failed</h1>
        </div>
    case apiStatusConstants.inProgress:
        return <div className='loader'>
        <ThreeDots color="#0b69ff" height="50" width="50" />
        </div>
   }
       
   }
   
  }

export default Details