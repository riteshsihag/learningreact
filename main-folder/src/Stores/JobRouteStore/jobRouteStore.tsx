import { action, decorate, observable } from 'mobx'
import Cookies from 'js-cookie';

type JobItemType = {
    logoUrl: string,
    employmentType: string,
    id: string,
    description: string,
    location: string,
    package: string,
    rating: string,
    title:string
}
class jobRouteStore implements JobItemType {
    apiStatusConstants = {
        initial: 'INITIAL',
        noJobs: 'NOJOBS',
        failure: 'FAILURE',
        success: 'SUCCESS'
    }
    allJobs: JobItemType[] = []
    employmentType = []
    minPackage = ''
    apiStatus = this.apiStatusConstants.initial

    getJobs = async () => {
        const url = `https://apis.ccbp.in/jobs?employment_type=${this.employmentType}&minimum_package=${this.minPackage}`
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
    checkBox = (type, checked) => {
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
    findMinPackageJobs = (salary, checked) => {
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