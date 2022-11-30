import {UpdateJobDetailService} from ".";
import Cookies from "js-cookie";
import {UpdateJobService} from ".";
export class JobDetailService implements UpdateJobDetailService{
    async getUpdatedJobDetails (id:string):Promise<Response> {
        const url = `https://apis.ccbp.in/jobs/${id}`
        const jwtToken = Cookies.get('jwt_token')
        const options = {
            method: 'GET',
            headers: { Authorization: `Bearer ${jwtToken}`, }
        }
        const response = await fetch(url, options)
        const data = await response.json()
        return data
    }
   }

export class JobService implements UpdateJobService{
    async getUpdatedJobs (employmentType:string[],minPackage:string):Promise<Response> {
        const url = `https://apis.ccbp.in/jobs?employment_type=${employmentType}&minimum_package=${minPackage}`
        const jwtToken = Cookies.get('jwt_token')
        const options = {
            method: 'GET',
            headers: { Authorization: `Bearer ${jwtToken}`, }
        }
        
        const response = await fetch(url, options)
        const data = await response.json()
        return data
    }
   }

