import './App.css';
import Card from './Component/card';
import { Component } from 'react';

const status = {
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
class App extends Component {
 
  displayView=(status)=>{
    if(status===status.registered){
      return <div>
        <img src='https://assets.ccbp.in/frontend/react-js/events-regestered-img.png'/>
      </div>
    }
  }
 
  render(){
   
  return(
      
  <div>
    <div className='container'>
        {content.map(item => {
          return(
            <Card displayView = {this.displayView} details={item} />)
        })}
      </div>
    </div>
  );
      }
}

export default App;
