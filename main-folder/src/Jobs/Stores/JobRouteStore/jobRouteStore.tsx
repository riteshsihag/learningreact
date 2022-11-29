import { action, decorate, observable } from 'mobx'
import JobService from '../../Services/JobServices/index.api'


type JobType = {
    company_logo_url: string,
    employment_type: string,
    id: string,
    job_description: string,
    location: string,
    package_per_annum: string,
    rating: string,
    title:string
}


class jobRouteStore {
   
    apiStatusConstants = {
        initial: 'INITIAL',
        noJobs: 'NOJOBS',
        failure: 'FAILURE',
        success: 'SUCCESS'
    }
    allJobs = []
    employmentType:string[] = []
    minPackage = ''
    apiStatus = this.apiStatusConstants.initial

    getJobs = async () => {
        const response = await JobService.getUpdatedJobs(this.employmentType,this.minPackage)
        const data = await response.json()
        if (response.ok === true) {
            const updatedData = data.jobs.map((job: JobType ) => ({
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
                this.apiStatus = this.apiStatusConstants.noJobs
            this.allJobs = updatedData

            }
           else{
            this.allJobs = updatedData
            this.apiStatus = this.apiStatusConstants.success
           }
        }
        else {
            this.apiStatus = this.apiStatusConstants.failure

        }
    }
    checkBox = (type: string, checked: boolean) => {
        if (checked === true) {
            this.employmentType = [...this.employmentType, type.toUpperCase()]
            this.getJobs()
        }
        else {
            const updatedData = this.employmentType.filter(item =>type !== item)
            this.employmentType = updatedData
            this.getJobs()
        }
    }
    findMinPackageJobs = (salary: string, checked: boolean) => {
        if (checked === true) {
            this.minPackage = salary
            this.getJobs()
        }
    }
}

decorate(jobRouteStore, {
    allJobs: observable,
    employmentType: observable,
    minPackage: observable,
    apiStatus: observable,
    getJobs: observable,
    findMinPackageJobs: action,
    checkBox: action
})

export default new jobRouteStore()