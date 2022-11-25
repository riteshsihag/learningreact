import {action,decorate, observable} from 'mobx'
import Cookies from 'js-cookie';
import { mockGetJobs } from '../../utils';
// type allDetails = {
//     name: string
//     profileUrl: string
//     bio: string
// }

class profileStore{
    allDetails= {} 
   
    getJobs =  () => {
       
         const data = mockGetJobs()
            const updatedData  = {
                name: data.name,
                profileUrl: data.profile_image_url,
                bio: data.short_bio
            }
             this.allDetails = updatedData 
        
    }
}

decorate(profileStore,{
   getJobs:observable,
   allDetails:observable
})

export default new profileStore()