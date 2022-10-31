import {Component} from 'react';
import './card.css'
const status = {
    initial:'initial',
    registered: 'REGISTERED',
    registrationClosed: 'REGISTRATIONS_CLOSED',
    notRegistered: 'YET_TO_REGISTER'
  }
 
class Display extends Component{
  
    render(){
       
        const { registrationStatus, registerNow} = this.props
       const registerHere = () =>{
         registerNow()
        }
        switch (registrationStatus) {
            case status.initial:
                return <div className='not'>
                   <h2>Click on an event, to see its registration details</h2>
                </div>
            case status.registered:
                return <div className='not'>
                    <img className='registered' src='https://assets.ccbp.in/frontend/react-js/events-regestered-img.png' />
                    <h2>You have registered for the event</h2>
                </div>
            case status.notRegistered:
                return <div className='not'>
                    <img className='not-regis' src='https://assets.ccbp.in/frontend/react-js/events-register-img.png' />
                    <p className='not-regis-para'>A live performance brings so much to your relationship with dance. Seeing dance live can often make you fall totally in love with this beautiful art form.</p>
                    <button onClick={registerHere} className='not-btn'>Register Now</button>
                </div>
            case status.registrationClosed:
                return <div className='not regis'>
                    <img className='regis-closed' src='https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png' />
                    <h2>Registrations Are Closed Now!</h2>
                    <p>Stay tuned. We will reopen the registrations soon!</p>
                </div>
        }
       
    }
}
export default Display;