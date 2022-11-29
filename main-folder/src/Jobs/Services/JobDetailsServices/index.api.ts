import UpdateJobDetailService from ".";
import Cookies from "js-cookie";
class JobDetailService implements UpdateJobDetailService{
    async getUpdatedJobDetails (id:string):Promise<Response> {
        const url = `https://apis.ccbp.in/jobs/${id}`
        const jwtToken = Cookies.get('jwt_token')
        const options = {
            method: 'GET',
            headers: { Authorization: `Bearer ${jwtToken}`, }
        }
        const response = await fetch(url, options)
        return response
    }
   }

export default new JobDetailService()