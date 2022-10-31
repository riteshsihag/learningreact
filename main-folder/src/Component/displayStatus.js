import {Component} from 'react';
import './card.css'
const status = {
    initial:'initial',
    registered: 'REGISTERED',
    registrationClosed: 'REGISTRATIONS_CLOSED',
    notRegistered: 'YET_TO_REGISTER'
  }
  const content = [
    {
      link: "https://photo-cdn2.icons8.com/uHkQgT5W8vxMJk7RcDp5QOQKX9e37EAih938XhAcNs4/rs:fit:288:187/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi85YTRlYzQxNjA2/NTE0OTY0YWEwZTg1/OTkzZGJjMTVhNC5q/cGc.webp",
      heading: "Haling Cove",
      id: '1',
      status: status.registered
    },
    {
      link: "https://photo-cdn2.icons8.com/uHkQgT5W8vxMJk7RcDp5QOQKX9e37EAih938XhAcNs4/rs:fit:288:187/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi85YTRlYzQxNjA2/NTE0OTY0YWEwZTg1/OTkzZGJjMTVhNC5q/cGc.webp",
      heading: "White Bridge",
      id: '2',
      status: status.notRegistered
    }, {
      link: "https://photo-cdn2.icons8.com/uHkQgT5W8vxMJk7RcDp5QOQKX9e37EAih938XhAcNs4/rs:fit:288:187/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi85YTRlYzQxNjA2/NTE0OTY0YWEwZTg1/OTkzZGJjMTVhNC5q/cGc.webp",
      heading: "Lockwood Village",
      id: '3',
      status: status.registrationClosed
    },
    {
      link: "https://photo-cdn2.icons8.com/uHkQgT5W8vxMJk7RcDp5QOQKX9e37EAih938XhAcNs4/rs:fit:288:187/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi85YTRlYzQxNjA2/NTE0OTY0YWEwZTg1/OTkzZGJjMTVhNC5q/cGc.webp",
      heading: "Daekrahm Village",
      id: '4',
      status: status.registered
  
    },
    {
      link: "https://photo-cdn2.icons8.com/uHkQgT5W8vxMJk7RcDp5QOQKX9e37EAih938XhAcNs4/rs:fit:288:187/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi85YTRlYzQxNjA2/NTE0OTY0YWEwZTg1/OTkzZGJjMTVhNC5q/cGc.webp",
      heading: "Warlington",
      id: '5',
      status: status.notRegistered
  
    }, {
      link: "https://photo-cdn2.icons8.com/uHkQgT5W8vxMJk7RcDp5QOQKX9e37EAih938XhAcNs4/rs:fit:288:187/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi85YTRlYzQxNjA2/NTE0OTY0YWEwZTg1/OTkzZGJjMTVhNC5q/cGc.webp",
      heading: "Azalea Village",
      id: '6',
      status: status.registrationClosed
  
    }
  ]
class Display extends Component{
   
    render(){
       
        const { registrationStatus } = this.props
        switch (registrationStatus) {
            
            case status.registered:
                return <div className='not'>
                    <img className='registered' src='https://assets.ccbp.in/frontend/react-js/events-regestered-img.png' />
                    <h2>You have already registered for the event</h2>
                </div>
            case status.notRegistered:
                return <div className='not'>
                    <img className='not-regis' src='https://assets.ccbp.in/frontend/react-js/events-register-img.png' />
                    <p className='not-regis-para'>A live performance brings so much to your relationship with dance. Seeing dance live can often make you fall totally in love with this beautiful art form.</p>
                    <button className='not-btn'>Register Now</button>
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