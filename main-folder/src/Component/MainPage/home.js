import { Component } from 'react'
import './home.css'
class Submit extends Component {
 submitAnother=()=>{
this.onSuccess()
 }
 onSuccess = () => {
  const {history} = this.props
  history.replace('/')
}
  render() {
   
    return (
     <>
     <div className='submit'>
                    <div className='submit-content'>
                       
                            <img src='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'/>
                            <h4>Submitted Successfully</h4>
                        <button type='submit' onClick={this.submitAnother}>Submit Another Response</button>
                    </div>

            </div>
     </>
    )
  }
}
export default Submit;