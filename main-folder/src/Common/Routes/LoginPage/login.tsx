import { Component } from 'react';
import './login.css'
import { Redirect,RouteComponentProps } from 'react-router-dom';
import {inject, observer} from 'mobx-react'
import Cookies from 'js-cookie'
@inject('LoginValues')
@observer
class Login extends Component<RouteComponentProps&InstanceType<any>> {

    render() {
    const {LoginValues} = this.props
    const jwtToken = Cookies.get("jwt_token")
     if(jwtToken !== undefined){
        return <Redirect to={'/'}/>
     }
     const onSuccess = (jwt_token: string) => {
        const {history} = this.props

        Cookies.set("jwt_token",jwt_token)
        history.replace('/')
      }
    const onSubmitForm=(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        LoginValues.onSuccessSubmitForm(onSuccess)
     }
    const onChangeUsername=(event:React.ChangeEvent<HTMLInputElement>)=>{
        LoginValues.onChangeUsername(event.target.value)
    }
    const onChangePassword=(event:React.ChangeEvent<HTMLInputElement>)=>{
        LoginValues.onChangePassword(event.target.value)
       
    }
   
        return (
            <>
                <div className='login'>
                    <div className='login-content'>
                        <img src='https://assets.ccbp.in/frontend/react-js/logo-img.png' alt=''/>
                        <form onSubmit={onSubmitForm}>
                            <p className='head'>USERNAME</p>
                            <input type={'text'} value={LoginValues.username} onChange={onChangeUsername} placeholder="Username" />
                            <p className='error'>{LoginValues.enterUsername}</p>
                            <p className='head'>PASSWORD</p>
                            <input type={'password'} value={LoginValues.password} onChange={onChangePassword} placeholder="Password" />
                            <p className='error'>{LoginValues.enterPassword}</p>
                        <button type='submit' onClick={LoginValues.checkInput}>Login</button>
                        <p className='error'>{LoginValues.error_msg}</p>
                        </form>
                    </div>
                </div>

            </>
        )
    }
}
export default Login;