import { Component } from 'react';
import Cookies from 'js-cookie'
import './login.css'
import { Redirect } from 'react-router-dom';
class Login extends Component {
    state = {
        username: '',
        password: '',
        enterPassword: '',
        enterUsername: '',
        error_msg: ''
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

    render() {
       const {username,password,enterUsername,enterPassword,error_msg} = this.state;
    const jwtToken = Cookies.get("jwt_token")
     if(jwtToken !== undefined){
        return <Redirect to={'/'}/>
     }
     
       
        return (
            <>
                <div className='login'>
                    <div className='login-content'>
                        <img src='https://assets.ccbp.in/frontend/react-js/logo-img.png' />
                        <form onSubmit={this.onSubmitForm}>
                            <p className='head'>USERNAME</p>
                            <input type={'text'} value={username} onChange={this.onChangeUsername} placeholder="Username" />
                            <p className='error'>{enterUsername}</p>
                            <p className='head'>PASSWORD</p>
                            <input type={'password'} value={password} onChange={this.onChangePassword} placeholder="Password" />
                            <p className='error'>{enterPassword}</p>
                        <button type='submit' onClick={this.checkInput}>Login</button>
                        <p className='error'>{error_msg}</p>
                        </form>
                    </div>
                </div>

            </>
        )
    }
}
export default Login;