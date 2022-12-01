import { Component } from 'react';
import Cookies from 'js-cookie'
import './login.css'
import { Redirect } from 'react-router-dom';
import ReactContext from '../../Context/reactContext';

class Login extends Component {
    state = {
        username: '',
        password: '',
        enterPassword: '',
        enterUsername: '',
        error_msg: '',
        checked: false
    }
    onSuccess = (jwt_token) => {
        Cookies.set("jwt_token",jwt_token,30)
        const {history} = this.props
        history.replace('/')
      }
    
    onSubmitForm= async(event)=>{
        event.preventDefault();
        const {username,password} = this.state;
        const userDetails = {username, password}
        const url = "https://apis.ccbp.in/login"
        const options = {
            method: "POST",
            body: JSON.stringify(userDetails)
        }
        const response = await fetch(url,options)
        const data = await response.json()
        
        if(response.ok === true){
            this.onSuccess(data.jwt_token);
        }
        else{
            this.setState({error_msg:data.error_msg})
        }
    }
    onChangeUsername=(event)=>{
        this.setState({username:event.target.value})
    }
    onChangePassword=(event)=>{
        this.setState({password:event.target.value})
    }
    checkInput=()=>{
       const {username,password} = this.state;
       if(username===''){
       this.setState({enterUsername: 'Enter Username'})
       }
       else{
        this.setState({enterUsername: ''})
       }
       if(password===''){
        this.setState({enterPassword: 'Enter Password'})
        }
        else{
        this.setState({enterPassword: ''})

        }
    }
    onShowPassword=()=>{
        this.setState(prevState=>({
            checked: !prevState.checked
        }))
    }

    render() {
       const {username,password,enterUsername,enterPassword,error_msg,checked} = this.state;
    const jwtToken = Cookies.get("jwt_token")
     if(jwtToken !== undefined){
        return <Redirect to={'/'}/>
     }
        return (
            <ReactContext.Consumer>
            {value=>{
              const {isDarkModeOn} = value
              return(
            <>
                <div className={isDarkModeOn?'login-dark login':'login'}>
                    <div  className={isDarkModeOn?'login-content-dark login-content':'login-content'}>
                        {isDarkModeOn?
                        <img src='https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png' />
                        : 
                        <img src='https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png' />

                    }
                        <form onSubmit={this.onSubmitForm}>
                            <p className={isDarkModeOn?'head-dark head':'head'}>USERNAME</p>
                            <input className={isDarkModeOn?'login-input-dark login-input':'login-input'} type={'text'} value={username} onChange={this.onChangeUsername} placeholder="Username" />
                            <p className='error'>{enterUsername}</p>
                            <p className={isDarkModeOn?'head-dark head':'head'}>PASSWORD</p>
                            <input className={isDarkModeOn?'login-input-dark login-input':'login-input'} type={checked?'text':'password'} value={password} onChange={this.onChangePassword} placeholder="Password" />
                            <div className='showPassword'>
                            <input type={'checkbox'} onChange={this.onShowPassword}/>
                            <p className='show'>Show Password</p>
                            </div>
                            <p className='error'>{enterPassword}</p>
                        <button type='submit' onClick={this.checkInput}>Login</button>
                        <p className='error'>{error_msg}</p>
                        </form>
                    </div>
                </div>

            </>
             )
            }}
        </ReactContext.Consumer>
        )
    }
}
export default Login;