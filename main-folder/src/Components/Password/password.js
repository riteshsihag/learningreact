import {useState} from'react'

const Password = () =>{
      const [password, setPassword] = useState('')
      const changePassword=(event)=>{
        setPassword(event.target.value)
      }
    return(
       <div className='password'>
        <h1>Password Validator</h1>
        <p>Check how strong and secure is your Password</p>
        <input type={'text'} value={password} onChange={changePassword}/>
       <p className='warning'>{password.trim().length>=8?"":"Your Password must be 8 character"}</p> 
       </div>
    )
}
export default Password