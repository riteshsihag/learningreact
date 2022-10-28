import { Component } from 'react';
import './login.css'
class Login extends Component {
    state = {
        firstname: '',
        lastname: '',
        enterlastname: '',
        enterfirstname: '',
    }
    onSuccess = () => {
        const {history} = this.props
        history.replace('/submitted')
      }
    
    onChangefirstname=(event)=>{
        this.setState({firstname:event.target.value})
    }
    onChangelastname=(event)=>{
        this.setState({lastname:event.target.value})
    }
    checkInput=(event)=>{
        event.preventDefault()
       const {firstname,lastname} = this.state;
       if(firstname!=="" && lastname!==""){
        this.onSuccess()
       }
       if(firstname===''){
       this.setState({enterfirstname: 'Required'})
       }
       else{
        this.setState({enterfirstname: ''})
       }
       if(lastname===''){
        this.setState({enterlastname: 'Required'})
        }
        else{
        this.setState({enterlastname: ''})

        }
    }

    render() {
       const {firstname,lastname,enterfirstname,enterlastname} = this.state;
       
        return (
            <div className='container'>
                    <div className='login-content'>
                        <form>
                            <p className='head'>FIRST NAME</p>
                            <input type={'text'} value={firstname} onChange={this.onChangefirstname} placeholder="First name" />
                            <p className='error'>{enterfirstname}</p>
                            <p className='head'>LAST NAME</p>
                            <input type={'lastname'} value={lastname} onChange={this.onChangelastname} placeholder="Last name" />
                            <p className='error'>{enterlastname}</p>
                        <button type='submit' onClick={this.checkInput}>Submit</button>
                        </form>
                    </div>

            </div>
        )
    }
}
export default Login;