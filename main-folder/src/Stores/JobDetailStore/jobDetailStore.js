import { action, decorate, observable } from 'mobx'
import Cookies from 'js-cookie';

class detailStore {
    apiStatusConstants = {
        initial: 'INITIAL',
        failure: 'FAILURE',
        success: 'SUCCESS',
        inProgress: 'INPROGRESS'
    }

    allDetails = []
    skills = []
    isLoading = false
    apiStatus = this.apiStatusConstants.initial


    getJobs = async (id) => {
        this.apiStatus = this.apiStatusConstants.inProgress

        const url = `https://apis.ccbp.in/jobs/${id}`
        const jwtToken = Cookies.get('jwt_token')
        const options = {
            method: 'GET',
            headers: { Authorization: `Bearer ${jwtToken}`, }
        }
        const response = await fetch(url, options)
        if (response.ok === true) {
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
            const updatedSkills = updatedData.skills.map(skill => ({
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