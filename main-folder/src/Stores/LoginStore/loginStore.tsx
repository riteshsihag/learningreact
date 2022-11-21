import {action,decorate, observable} from 'mobx'

class loginStore{
    username = ''
    password = ''
    enterPassword = ''
    enterUsername = ''
    error_msg = ''
    
    onSuccessSubmitForm= async(onSuccess: (jwt_token: string) => void)=>{
        const userDetails = {username:this.username,password:this.password}
        const url = "https://apis.ccbp.in/login"
        const options = {
            method: "POST",
            body: JSON.stringify(userDetails)
        }
        const response = await fetch(url,options)
        const data = await response.json()
        
        if(response.ok === true){
            onSuccess(data.jwt_token);
        }
        else{
          this.error_msg = data.error_msg
        }
    }

    onChangeUsername=(value:string)=>{
        this.username=value
    }
    onChangePassword=(value:string)=>{
        this.password=value
    }
    checkInput=()=>{
   
        if(this.username===''){
        this.enterUsername = 'Enter Username'
        }
        else{
            this.enterUsername=''
        }
        if(this.password===''){
         this.enterPassword = 'Enter Password'
         }
         else{
        this.enterPassword = ''
    
         }
     }
}

decorate(loginStore,{
    username: observable,
    password: observable,
    enterPassword: observable,
    enterUsername: observable,
    error_msg: observable,
    onSuccessSubmitForm: action,
    onChangeUsername:action,
    onChangePassword:action,
    checkInput:action
})

export default new loginStore()