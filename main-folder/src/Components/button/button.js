import React from 'react'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const Button = props => {
  const {history} = props
  const onLogout=()=>{
    Cookies.remove('jwt_token')
    history.replace('/login')
  
  }
  return (
    <button onClick={onLogout}>Logout</button>
  )
}
export default withRouter(Button);