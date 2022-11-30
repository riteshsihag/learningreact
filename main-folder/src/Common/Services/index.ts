export interface LoginService {
    getLoginData: (username:string,password:string) => Promise<Response|unknown>
 }
 