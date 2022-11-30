import { ProfileService } from '.';
import ProfileFixtureData from '../fixtures/profileFixture.json'
export class ProfileFixture implements ProfileService{
    getProfileData():Promise<Response|any>{
      return new Promise((resolve)=>resolve(ProfileFixtureData.profile_details))
     }
      
      
 }