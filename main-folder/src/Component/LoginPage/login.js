import { Component } from 'react';
import './login.css'
import { Redirect } from 'react-router-dom';
import {observer} from 'mobx-react'
import loginStore from '../../Stores/LoginStore/loginStore';
import Cookies from 'js-cookie'

class Login extends Component {

    render() {
        const LoginValues = loginStore;
    const jwtToken = Cookies.get("jwt_token")
     if(jwtToken !== undefined){
        return <Redirect to={'/'}/>
     }
     const onSuccess = (jwt_token) => {
        const {history} = this.props

        Cookies.set("jwt_token",jwt_token,30)
        history.replace('/')
      }
    const onSubmitForm=(event)=>{
        event.preventDefault();
        LoginValues.onSuccessSubmitForm(onSuccess)
     }
    const onChangeUsername=(event)=>{
        LoginValues.onChangeUsername(event.target.value)
    }
    const onChangePassword=(event)=>{
        LoginValues.onChangePassword(event.target.value)
       
    }
   
        return (
            <>
                <div className='login'>
                    <div className='login-content'>
                        <img src='https://assets.ccbp.in/frontend/react-js/logo-img.png' />
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
export default observer(Login);