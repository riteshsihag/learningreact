import React from 'react'
import Cookies from 'js-cookie'

export const Login = (props) => {
    const onSubmitLogin=(jwtToken)=>{
    Cookies.set("jwt_token",jwtToken,30)
     const {history} = props
     history.replace('/')
    }
    const onLogin = async(event) =>{
       event.preventDefault()
       const url = "https://apis.ccbp.in/login"
       const userDetails = {username:"praneetha", password:"praneetha@2021"}
       const options = {
        method: 'POST',
        body: JSON.stringify(userDetails)
       }
       const response = await fetch(url,options)
       const data = await response.json();
       console.log(response)
       if(response.ok === true){
       onSubmitLogin(data.jwt_token)
       }

    }

  return (
    <div>
        <h1>Please Login</h1>
        <button onClick={onLogin}>Login with Sample Card</button>
    </div>
  )
}
