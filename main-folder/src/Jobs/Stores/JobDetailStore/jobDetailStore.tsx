import { decorate, observable } from 'mobx'
import JobDetailModel from '../../Models/jobDetailModel'
import {JobDetailService} from '../../Services/index.api'

class detailStore {
    apiStatusConstants = {
        initial: 'INITIAL',
        failure: 'FAILURE',
        success: 'SUCCESS',
        inProgress: 'INPROGRESS'
    }
    jobDetailService = new JobDetailService()
    allDetails = {}
    skills = {}
    isLoading = false
    apiStatus = this.apiStatusConstants.initial
    jobDetailApiData;
   constructor(jobDetailService:InstanceType<any>,detailFixtureData:InstanceType<any>){
    this.jobDetailApiData = detailFixtureData
   }

    getJobs = async (id: string) => {
        this.apiStatus = this.apiStatusConstants.inProgress
        const data = await this.jobDetailApiData.getUpdatedJobDetails(id)
       
       try {

            const updatedData = new JobDetailModel(data)
            const updatedSkills = updatedData.skills.map((skill) => ({
                imageUrl: skill.image_url,
                name: skill.name
            }))

            this.allDetails = updatedData
            this.apiStatus = this.apiStatusConstants.success
            this.skills = updatedSkills
        }
        catch {
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

export default detailStore