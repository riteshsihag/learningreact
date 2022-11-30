import { LoginService } from "."
import { LoginUtil } from "../Utils/LoginUtil"

 export class LoginServiceApi implements LoginService{
    async getLoginData (username:string,password:string):Promise<Response|unknown> {
        const userDetails = {username:username,password:password}
        const url = "https://apis.ccbp.in/login"
        const options = {
            method: "POST",
            body: JSON.stringify(userDetails)
        }
        const response = await fetch(url,options)
        return LoginUtil(response)
    }
   }
