import React from 'react'

export const Login = (props) => {
    const onSubmitLogin=()=>{
     const {history} = props
     history.replace('/')
    }
    const onLogin = async(event) =>{
       event.preventDefault()
       const url = "https://apis.ccbp.in/login"
       const options = {
        method: 'POST'
       }
       const response = await fetch(url,options)
       const data = await response.json()
       if(response.ok === true){
       onSubmitLogin()
       }

    }

  return (
    <div>
        <h1>Please Login</h1>
        <button onClick={onLogin}>Login with Sample Card</button>
    </div>
  )
}
