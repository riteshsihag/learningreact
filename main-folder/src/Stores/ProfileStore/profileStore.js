import {action,decorate, observable} from 'mobx'
import Cookies from 'js-cookie';

class profileStore{
    allDetails= []
   
    getJobs = async () => {
        const url = `https://apis.ccbp.in/profile`
        const jwtToken = Cookies.get('jwt_token')
        const options = {
            method: 'GET',
            headers: { Authorization: `Bearer ${jwtToken}`, }
        }
        const response = await fetch(url, options)
        const data = await response.json()
        if (response.ok === true) {
            const updatedData = {
                name: data.profile_details.name,
                profileUrl: data.profile_details.profile_image_url,
                bio: data.profile_details.short_bio
            }
             this.allDetails = updatedData 
        }
    }
}

decorate(profileStore,{
   getJobs:observable,
   allDetails:observable
})

export default new profileStore()