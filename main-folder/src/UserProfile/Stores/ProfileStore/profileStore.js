import {decorate, observable} from 'mobx'
import { mockGetJobs } from '../../Utils/utils'


class profileStore{
    allDetails= {} 
   
    getJobs =  async() => {
       
         const data = await mockGetJobs()
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