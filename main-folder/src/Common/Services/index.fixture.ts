import { LoginService } from '.';
import LoginFixtureData from '../fixtures/loginFixture.json'
export class LoginFixture implements LoginService{
    getLoginData(username: string, password: string):Promise<Response|any>{
      return new Promise((resolve)=>resolve(LoginFixtureData))
     }
      
      
 }