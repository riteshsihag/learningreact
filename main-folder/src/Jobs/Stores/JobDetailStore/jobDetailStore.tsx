import { decorate, observable } from 'mobx'
import JobDetailService from '../../Services/JobDetailsServices/index.api'

type similarJobsType = {
    company_logo_url: string
    employment_type: string
    id:string
    job_description:string
    location: string
    rating: string
    title: string
}
type skillsType = {
   map: any;
   imageUrl: string;
   name: string;
}
type allDetailsType = { 
        title: string,
        id: string,
        logoUrl: string,
        websiteUrl:string,
        employmentType: string,
        description:string,
        skills: skillsType[],
        life:{description: string,image_url: string},
        salary: string,
        rating: string,
        similarJobs: similarJobsType[],
        location: string
   
}
class detailStore {
    apiStatusConstants = {
        initial: 'INITIAL',
        failure: 'FAILURE',
        success: 'SUCCESS',
        inProgress: 'INPROGRESS'
    }

    allDetails = {} as allDetailsType
    skills = []
    isLoading = false
    apiStatus = this.apiStatusConstants.initial


    getJobs = async (id: string) => {
        this.apiStatus = this.apiStatusConstants.inProgress
        const response = await JobDetailService.getUpdatedJobDetails(id)
        const data = await response.json()
        if (response.ok === true) {

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
            const updatedSkills = updatedData.skills.map((skill: { image_url: string; name: string; }) => ({
                imageUrl: skill.image_url,
                name: skill.name
            }))

            this.allDetails = updatedData
            this.apiStatus = this.apiStatusConstants.success
            this.skills = updatedSkills
        }
        else {
            this.apiStatus = this.apiStatusConstants.failure
        }
    }
}

decorate(detailStore, {
    allDetails: observable,
    skills: observable,
    isLoading: observable,
    apiStatus: observable,
    getJobs: observable,
    
})

export default new detailStore()