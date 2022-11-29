import UpdateJobService from ".";
import Cookies from "js-cookie";
class JobService implements UpdateJobService{
    async getUpdatedJobs (employmentType:string[],minPackage:string):Promise<Response> {
        const url = `https://apis.ccbp.in/jobs?employment_type=${employmentType}&minimum_package=${minPackage}`
        const jwtToken = Cookies.get('jwt_token')
        const options = {
            method: 'GET',
            headers: { Authorization: `Bearer ${jwtToken}`, }
        }
        
        const response = await fetch(url, options)
        return response
    }
   }

export default new JobService()