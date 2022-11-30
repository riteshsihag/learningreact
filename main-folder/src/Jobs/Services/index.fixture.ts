import { UpdateJobDetailService } from '.';
import { UpdateJobService } from '.';
import jobFixtureData from '../fixtures/jobfixture.json'
import detailFixtureData from '../fixtures/detailfixture.json'

export class JobFixtureData implements UpdateJobService{
   getUpdatedJobs(employmentType: string[], minPackage: string): Promise<Response|any>{
     return new Promise((resolve)=>resolve(jobFixtureData))
    }
     
     
}
export class DetailFixtureData implements UpdateJobDetailService{
    getUpdatedJobDetails(id: string):Promise<Response|any>{
      return new Promise((resolve)=>resolve(detailFixtureData))
     }
      
      
 }