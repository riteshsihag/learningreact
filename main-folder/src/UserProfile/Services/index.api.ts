import { ProfileService } from "."
import Cookies from 'js-cookie';

 export class ProfileServiceApi implements ProfileService{
    async getProfileData ():Promise<Response|unknown> {
        const url = `https://apis.ccbp.in/profile`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
        method: 'GET',
        headers: { Authorization: `Bearer ${jwtToken}`, }
    }
    const response = await fetch(url, options)
    const data = await response.json()
    
        return data.profile_details
    }
   }
